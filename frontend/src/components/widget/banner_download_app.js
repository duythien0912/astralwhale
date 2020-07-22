import React from 'react';


const BannerDownloadApp = () => {

    return (
        <section className="edica-footer-banner-section">
            <div className="container">
                <div className="footer-banner" data-aos="fade-up">
                    <h1 className="banner-title">Download it now.</h1>
                    <div className="banner-btns-wrapper">
                        <button className="btn btn-success">
                            <img src="static/frontend/assets/images/apple@1x.svg" alt="ios" className="mr-2"/>{" "}
                            App Store
                        </button>
                        <button className="btn btn-success">
                            <img
                                src="static/frontend/assets/images/android@1x.svg"
                                alt="android"
                                className="mr-2"
                            />
                            Google Play
                        </button>
                    </div>
                    <p className="banner-text">
                        Add some helper text here to explain the finer details of your <br/>{" "}
                        product or service.
                    </p>
                </div>
            </div>
        </section>
    );
}

export {BannerDownloadApp};