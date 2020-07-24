import os
from random import randint
from time import sleep
import requests
import json

import uiautomator2 as u2
from adbutils import adb
import datetime


def random_sleep():
    delay = randint(6, 12)
    print("Sleep for " + str(delay) + (delay == 1 and " second" or " seconds"))
    sleep(delay)


def random_sleep_long():
    delay = randint(25, 30)
    print("Sleep for " + str(delay) + (delay == 1 and " second" or " seconds"))
    sleep(delay)


def init_devicd():
    # process = os.popen("adb connect 127.0.0.1:62001")
    # process.read()
    # process.close()

    for d in adb.device_list():
        print(d.serial)
    deviceId = adb.device_list()[0].serial
    d = u2.connect('192.168.56.103:5555')
    d.screen_on()
    return d


def open_tiktok(d):
    print("Open TikTok app")
    d.toast.show("Open TikTok app")
    d.app_start("com.zhiliaoapp.musically", use_monkey=True, wait=True)
    print(d.app_current())


def stop_tiktok(d):
    print("Stop TikTok app")
    d.toast.show("Stop TikTok app")
    d.app_stop("com.zhiliaoapp.musically")


def crash_tiktok(d):
    print("Crash TikTok app")
    d.toast.show("Crash TikTok app")
    d.screenshot("./logs/crash.jpg")
    d.app_stop("com.zhiliaoapp.musically")
    d.screen_off()


def like_tiktok(d, storage):
    random_sleep()
    # pre_like = int(d(resourceId="com.zhiliaoapp.musically:id/aas").get_text())
    follow_chance = randint(1, 100)
    if follow_chance > (100 - 30):
        print("like" + str(follow_chance))
        d(className="android.widget.FrameLayout",
          resourceId="com.zhiliaoapp.musically:id/aar").click()
        # after_like = int(
        #     d(resourceId="com.zhiliaoapp.musically:id/aas").get_text())

        # if after_like != pre_like:
        storage.add_interacted_user(
            d(resourceId="com.zhiliaoapp.musically:id/title").get_text(), liked=True)

    scroll = d.xpath(
        '//android.support.v4.view.ViewPager').info.get('bounds').get('bottom') * 3 / 4
    d.swipe(0, int(scroll), 0, 0, 0.08)
    d(resourceId="com.zhiliaoapp.musically:id/a2g").wait_gone(timeout=10.0)


def go_home_tiktok(d):
    # d(resourceId="com.zhiliaoapp.musically:id/c25").click()
    d(text='Trang chủ').click()
    d.click(0.488, 0.502)
    print(d(resourceId="com.zhiliaoapp.musically:id/b7x").exists)


def discover_tiktok():
    url = "https://www.tiktok.com/node/share/discover"

    payload = {}
    headers = {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
        'Cookie': 'tt_webid_v2=6849192402302551554'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    json_data = json.loads(response.text.encode('utf8'))

    print(json_data)


def go_user_profile(d, storage):
    d(text='Khám phá').click()

    # d.xpath(
    # '//*[@resource-id="com.zhiliaoapp.musically:id/c24"]/android.widget.ImageView[1]').click()
    # d(resourceId="com.zhiliaoapp.musically:id/d0i").click()
    d(text='Tìm kiếm').click()
    sleep(1)
    d.send_keys("@tra.dang.904", clear=True)
    d(text='Tìm kiếm').click()
    # @tra.dang.904
    if d(text="tra.dang.904").sibling(
            className="android.widget.TextView").exists(timeout=8):
        d(text="tra.dang.904").sibling(
            className="android.widget.TextView").click()
    if d(text="tra.dang.904 T").sibling(
            className="android.widget.TextView").exists(timeout=8):
        d(text="tra.dang.904 T").sibling(
            className="android.widget.TextView").click()
    d(text='Follower').exists(timeout=8)
    sleep(1)
    d(text='Follower').click()
    while True:
        isEnd = 0
        for i in range(0, 14):
            if d(text="Bạn đang follow quá nhanh.").exists:
                crash_tiktok(d)
            if d.xpath('//*/android.widget.RelativeLayout[' + str(
                    i) + ']/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]').exists:
                if d.xpath('//*/android.widget.RelativeLayout[' + str(
                        i) + ']/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]').get_text() == 'Follow':
                    d.xpath('//*/android.widget.RelativeLayout[' + str(
                        i) + ']/android.widget.RelativeLayout[1]').click()
                    isEnd = 1
                    random_sleep()
                    if d.xpath('//*/android.widget.RelativeLayout[' + str(
                            i) + ']/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]').get_text() == 'Follow':
                        random_sleep()
                        if d.xpath('//*/android.widget.RelativeLayout[' + str(
                                i) + ']/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]').get_text() == 'Follow':
                            print("Bạn đang follow quá nhanh")
                            crash_tiktok(d)
                            break
                    if (d.xpath('//*/android.widget.RelativeLayout[' + str(
                            i) + ']/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView').exists):
                        now = datetime.datetime.now()
                        print(now.strftime("%Y-%m-%d %H:%M:%S") +
                              " follow: " + str(i))
                        print(d.xpath('//*/android.widget.RelativeLayout[' + str(
                            i) + ']/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView').get_text())
                        storage.add_interacted_user(
                            d.xpath('//*/android.widget.RelativeLayout[' + str(
                                i) + ']/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView').get_text(),
                            followed=True)
                    random_sleep()
        # random_sleep()

        print("No More Stop Follow bot")
        scroll = d.xpath(
            '//android.support.v4.view.ViewPager').info.get('bounds').get('bottom') * 2 / 4
        d.swipe(int(scroll), int(scroll) / 2, 0, 0, 0.08)
        d.swipe(0, int(scroll), 0, 0, 0.08)
        random_sleep()
        if isEnd == 0:
            d(description="Quay lại").exists(timeout=8)
            d(description="Quay lại").sibling(
                className="android.widget.ImageView").click()
            d(text='Follower').exists(timeout=8)
            sleep(1)
            d(text='Follower').click()

    # d(resourceId="com.zhiliaoapp.musically:id/kj").click()
    # sleep(1)
    # d(text='Follower').click()
    # go_user_profile(d, storage)


def upload_video(d):
    print('==> Start upload video')
    res = d.push('http://127.0.0.1:8000/media/files/10.mp4', "/sdcard/Pictures/" + '10.mp4')
    print(res)
