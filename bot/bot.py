# TODO: Clean code

# [DONE] nox player

# Tạo luồn cho task follow dựa trên tài khoản
# ( vào những ng follow, like và DM xin follow chéo )

# Task huỷ follow

# Lưu vào database

# Auto comment lên video sau khi like

# Auto đăng bài khi lên thời gian trước

# Xây UI web

# tự động crawp content

# Tự upload video trong folder

import os
from time import sleep

import uiautomator2 as u2
from adbutils import adb

from src.tasks import *
from src.storage import *


def main():
    try:
        print("start bot")
        discover_tiktok()
        d = init_devicd()
        # d.debug = True
        storage = Storage("neun")
        stop_tiktok(d)
        open_tiktok(d)
        sess = d.session("com.zhiliaoapp.musically", attach=True)
        go_home_tiktok(sess)
        go_user_profile(sess, storage)
        # while True:
        #     like_tiktok(sess, storage)
        stop_tiktok(d)
        sess.close()
    except Exception as e:
        print(e)
        crash_tiktok(d)


if __name__ == "__main__":
    main()
