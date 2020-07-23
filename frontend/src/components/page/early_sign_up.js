import React, {useState, useMemo} from "react";

import './early_sign_up.css';

const EarlySignUp = () => {
    return (
        <>
            <div className="body">
                <div className="content">
                    <div className="landing">
                        <div className="landing-content">
                            <div className="landing-text-outer">
                                <div className="landing-text">
                                    <div className="landing-title">
                                        Technology is
                                        <br/>
                                        <span className="highlight">changing</span>
                                    </div>
                                    <div className="landing-paragraph">
                                        The modern world is constantly evolving around us. Sign up for the
                                        BreakingBoundaries newsletter to receive weekly updates on the latest
                                        breakthroughs in technology.
                                    </div>
                                    <div className="landing-signup">
                                        <form className="signup-form">
                                            <div className="signup-item">
                                                <input type="email" placeholder="Enter your email"/>
                                            </div>
                                            <div className="signup-item">
                                                <button type="submit">Sign up</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="effects">
                    <div className="bg-effect1"/>
                    <div className="bg-effect2"/>
                    <div className="bg-effect3"/>
                </div>
            </div>


        </>
    );
}

export {EarlySignUp};