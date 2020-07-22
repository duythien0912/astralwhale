import React, {Component} from "react";


const Footer = () => {

    return (
        <footer className="edica-footer" data-aos="fade-up">
            <div className="container">
                <div className="row footer-widget-area">
                    <div className="col-md-3">
                        <a href="/" className="footer-brand-wrapper">
                            <img src="static/frontend/assets/images/logo.svg" alt="edica logo"/>
                        </a>
                        <p className="contact-details">hello@edica.com</p>
                        <p className="contact-details">+23 3000 000 00</p>
                        <nav className="footer-social-links">
                            <a href="#!">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a href="#!">
                                <i className="fab fa-twitter"/>
                            </a>
                            <a href="#!">
                                <i className="fab fa-behance"/>
                            </a>
                            <a href="#!">
                                <i className="fab fa-dribbble"/>
                            </a>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <nav className="footer-nav">
                            <a href="#!" className="nav-link">
                                Company
                            </a>
                            <a href="#!" className="nav-link">
                                Android App
                            </a>
                            <a href="#!" className="nav-link">
                                ios App
                            </a>
                            <a href="#!" className="nav-link">
                                Blog
                            </a>
                            <a href="#!" className="nav-link">
                                Partners
                            </a>
                            <a href="#!" className="nav-link">
                                Careers
                            </a>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <nav className="footer-nav">
                            <a href="#!" className="nav-link">
                                FAQ
                            </a>
                            <a href="#!" className="nav-link">
                                Reporting
                            </a>
                            <a href="#!" className="nav-link">
                                Block Storage
                            </a>
                            <a href="#!" className="nav-link">
                                Tools &amp; Integrations
                            </a>
                            <a href="#!" className="nav-link">
                                API
                            </a>
                            <a href="#!" className="nav-link">
                                Pricing
                            </a>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <div className="dropdown footer-country-dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="footerCountryDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="flag-icon flag-icon-gb flag-icon-squared"/>{" "}
                                United Kingdom <i className="fas fa-chevron-down ml-2"/>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="footerCountryDropdown"
                            >
                                <button className="dropdown-item" href="#">
                                    <span className="flag-icon flag-icon-us flag-icon-squared"/>{" "}
                                    United States
                                </button>
                                <button className="dropdown-item" href="#">
                                    <span className="flag-icon flag-icon-au flag-icon-squared"/>{" "}
                                    Australia
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-content">
                    <nav className="nav footer-bottom-nav">
                        <a href="#!">Privacy &amp; Policy</a>
                        <a href="#!">Terms</a>
                        <a href="#!">Site Map</a>
                    </nav>
                    <p className="mb-0">
                        © Edica. 2020{" "}
                        <a
                            href="https://www.bootstrapdash.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-reset"
                        >
                            bootstrapdash
                        </a>{" "}
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export {Footer};