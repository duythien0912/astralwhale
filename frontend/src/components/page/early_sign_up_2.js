import React, {useState, useMemo} from "react";

import './early_sign_up_2.css';

const EarlySignUpV2 = () => {
    return (
        <>
            <div className="body-earlySignUpV2">
            <div className="pre-loader">
                <lottie-player src="static/frontend/assets/lottie/loading.json"
                               background="transparent" speed={1} style={{width: '300px', height: '300px'}} loop
                               autoPlay/>
            </div>
            <div className="wrapper">
                <div className="hero">
                    <div className="container w-container">
                        <div data-w-id="33a0fc5e-1a5a-d5a9-235e-599d194f0643" style={{
                            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                            opacity: 1
                        }} className="hero__wrap">
                            <div className="hero__content"><img
                                src="static/frontend/assets/images/logo.png"
                                width={128} draggable="false" style={{
                                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d'
                            }} alt="" className="app-icon"/>
                                {/*<img*/}
                                {/*    src="static/frontend/assets/images/logo.png"*/}
                                {/*    alt="" className="logo"/>*/}
                                <h1 className="hero__message">Shared journal for<br/> long-distance family</h1>
                                <p className="feature__item__desc">Stay updated with those you care about most.</p>
                                <div className="form-block w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form"
                                          className="form email-form">
                                        <input type="email" className="text-field w-input" autoFocus={true}
                                               maxLength={256} name="email" data-name="Email"
                                               placeholder="Your Email" id="email" required/><input type="submit"
                                                                                                    defaultValue="Get TestFlight Beta"
                                                                                                    data-wait="Please wait..."
                                                                                                    className="button w-button"/>
                                    </form>
                                    <div className="success-message w-form-done">
                                        <div className="text-block-2">Thank you! Your submission has been
                                            received!
                                        </div>
                                    </div>
                                    <div className="error-message w-form-fail">
                                        <div className="text-block-3">Oops! Something went wrong while submitting
                                            the form.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__preview"><img
                                src="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eb1249b1809fb087a5e9877_apppreview.png"
                                srcSet="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eb1249b1809fb087a5e9877_apppreview-p-500.png  500w,https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eb1249b1809fb087a5e9877_apppreview.png  576w"
                                sizes="(max-width: 479px) 37vw, (max-width: 991px) 288px, (max-width: 1919px) 201.546875px, 207.328125px"
                                draggable="false" alt="" className="preview__image"/>
                                <div className="blob_animation preview">
                                    <div className="blob_animation preview">
                                        <lottie-player
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                transform: 'translate3d(0px, 0px, 0px)'
                                            }}
                                            src="static/frontend/assets/lottie/background.json"
                                            background="transparent" speed="0.5" loop autoPlay/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="feature">*/}
                {/*    <div className="container w-container">*/}
                {/*        <div className="w-layout-grid feature__list">*/}
                {/*            <div id="w-node-4570ae4cabad-cff3845a" data-w-id="ab117d44-b27b-894c-7b2c-4570ae4cabad"*/}
                {/*                 className="feature__item" style={{*/}
                {/*                opacity: 1,*/}
                {/*                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',*/}
                {/*                transformStyle: 'preserve-3d'*/}
                {/*            }}>*/}
                {/*                <h3 className="feature__item__title">Join Journal</h3>*/}
                {/*                <p className="feature__item__desc">Create your own journal book <br/>and invite*/}
                {/*                    friends.</p>*/}
                {/*                <div className="feature__item__figure"><img*/}
                {/*                    src="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eae42ba153c287e60613c53_img__illustration__group.png"*/}
                {/*                    srcSet="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eae42ba153c287e60613c53_img__illustration__group-p-500.png  500w,https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eae42ba153c287e60613c53_img__illustration__group.png  768w"*/}
                {/*                    sizes="100vw" draggable="false" alt="" className="feature__item__image"/>*/}
                {/*                    <div className="blob_animation preview">*/}
                {/*                        <div className="blob_animation preview">*/}
                {/*                            <lottie-player style={{*/}
                {/*                                width: '100%',*/}
                {/*                                height: '100%',*/}
                {/*                                transform: 'translate3d(0px, 0px, 0px)'*/}
                {/*                            }}*/}
                {/*                                           src="static/frontend/assets/lottie/background.json"*/}
                {/*                                           background="transparent" speed="0.5" loop autoPlay/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div id="w-node-4144ca1f13f3-cff3845a" data-w-id="4adc9999-6012-9959-aaad-4144ca1f13f3"*/}
                {/*                 className="feature__item" style={{*/}
                {/*                opacity: 1,*/}
                {/*                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',*/}
                {/*                transformStyle: 'preserve-3d'*/}
                {/*            }}>*/}
                {/*                <h3 className="feature__item__title">Write everyday</h3>*/}
                {/*                <p className="feature__item__desc">Write a daily journal together <br/>to stay*/}
                {/*                    updated.</p>*/}
                {/*                <div className="feature__item__figure"><img*/}
                {/*                    src="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5f09117c27f3d3141dae90af_img__illustration__post.png"*/}
                {/*                    width={768} draggable="false" alt="" className="feature__item__image"/>*/}
                {/*                    <div className="blob_animation preview">*/}
                {/*                        <div className="blob_animation preview">*/}
                {/*                            <lottie-player style={{*/}
                {/*                                width: '100%',*/}
                {/*                                height: '100%',*/}
                {/*                                transform: 'translate3d(0px, 0px, 0px)'*/}
                {/*                            }}*/}
                {/*                                           src="static/frontend/assets/lottie/background.json"*/}
                {/*                                           background="transparent" speed="0.5" loop autoPlay/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div id="w-node-0ff7f3b3df74-cff3845a" className="feature__item bg-fullsize">*/}
                {/*                <div className="feature__item__wrap">*/}
                {/*                    <h2 className="feature__item__title">Journal Covers</h2>*/}
                {/*                    <p className="feature__item__desc dark">Choose your favorite journal cover</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="footer">
                <div className="container w-container">
                    <div className="footer__wrap">
                        {/*<div className="footet__social"><a href="https://www.instagram.com/wafflejournal/"*/}
                        {/*                                   target="_blank"*/}
                        {/*                                   className="footer__social__item w-inline-block"><img*/}
                        {/*    src="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eadf5c06af9c8893adc3d52_Instagram.svg"*/}
                        {/*    alt=""/></a><a href="https://twitter.com/getwaffleapp" target="_blank"*/}
                        {/*                   className="footer__social__item w-inline-block"><img*/}
                        {/*    src="https://uploads-ssl.webflow.com/5eaa269c1d404a20450c6484/5eadf5e3cd1146babe7589cc_Twitter.svg"*/}
                        {/*    alt=""/></a></div>*/}
                        <div id="footer__menu" className="footer__menu"><a
                            href="https://www.notion.so/bubbly/Terms-of-Service-88f3650a9b614839aae8d8c6de9d7973"
                            className="footer__menu__item">Terms</a><a
                            href="https://www.notion.so/bubbly/Privacy-Policy-4c378039141c4029b9d85bea75c834a6"
                            className="footer__menu__item">Privacy</a></div>
                        <div className="footer__credit">©2020 <a href="https://www.poppy.ai/" target="_blank"
                                                                 className="link">Astral Whale</a></div>
                    </div>
                </div>
            </div>
</div>

        </>
    );
}

export {EarlySignUpV2};