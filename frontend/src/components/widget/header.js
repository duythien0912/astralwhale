import React, {Component} from "react";
import {render} from "react-dom";

const Header = () => {
    return (
        <header className="edica-header edica-landing-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index">
                        <img src="static/frontend/assets/images/logo.svg" alt="Edica"/>
                    </a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#edicaMainNav"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="edicaMainNav">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="index">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="blogDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Blog
                                </a>
                                <div className="dropdown-menu" aria-labelledby="blogDropdown">
                                    <a className="dropdown-item" href="blog">
                                        Blog Archive
                                    </a>
                                    <a className="dropdown-item" href="blog-single">
                                        Blog Post
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="pagesDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                    <a className="dropdown-item" href="404">
                                        404
                                    </a>
                                    <a className="dropdown-item" href="coming-soon">
                                        Coming Soon
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="flag-icon flag-icon-squared rounded-circle flag-icon-gb"/>{" "}
                                    Eng
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Download
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="edica-landing-header-content">
                    <div
                        id="edicaLandingHeaderCarousel"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#edicaLandingHeaderCarousel"
                                data-slide-to={0}
                                className="active"
                            >
                                .01
                            </li>
                            <li data-target="#edicaLandingHeaderCarousel" data-slide-to={1}>
                                .02
                            </li>
                            <li data-target="#edicaLandingHeaderCarousel" data-slide-to={2}>
                                .03
                            </li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6 carousel-content-wrapper">
                                        <h1>Get Started Power social proof for your brands.</h1>
                                        <p>
                                            He has led a remarkable campaign, defying the traditional
                                            mainstream parties courtesy of his En Marche! movement.
                                        </p>
                                        <div className="carousel-content-btns">
                                            <a href="#!" className="btn btn-success">
                                                {" "}
                                                <i className="fab fa-apple mr-2"/> App Store
                                            </a>
                                            <a href="#!" className="btn btn-secondary">
                                                {" "}
                                                <i className="fab fa-android mr-2"/> Google Play
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 carousel-img-wrapper">
                                        <img
                                            src="static/frontend/assets/images/Slider_1.png"
                                            alt="carousel-img"
                                            className="img-fluid"
                                            width="350px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6 carousel-content-wrapper">
                                        <h1>Get Started Power social proof for your brands.</h1>
                                        <p>
                                            He has led a remarkable campaign, defying the traditional
                                            mainstream parties courtesy of his En Marche! movement.
                                        </p>
                                        <div className="carousel-content-btns">
                                            <a href="#!" className="btn btn-success">
                                                {" "}
                                                <i className="fab fa-apple mr-2"/> App Store
                                            </a>
                                            <a href="#!" className="btn btn-secondary">
                                                {" "}
                                                <i className="fab fa-android mr-2"/> Google Play
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 carousel-img-wrapper">
                                        <img
                                            src="static/frontend/assets/images/Slider_1.png"
                                            alt="carousel-img"
                                            className="img-fluid"
                                            width="350px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6 carousel-content-wrapper">
                                        <h1>Get Started Power social proof for your brands.</h1>
                                        <p>
                                            He has led a remarkable campaign, defying the traditional
                                            mainstream parties courtesy of his En Marche! movement.
                                        </p>
                                        <div className="carousel-content-btns">
                                            <a href="#!" className="btn btn-success">
                                                {" "}
                                                <i className="fab fa-apple mr-2"/> App Store
                                            </a>
                                            <a href="#!" className="btn btn-secondary">
                                                {" "}
                                                <i className="fab fa-android mr-2"/> Google Play
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 carousel-img-wrapper">
                                        <img
                                            src="static/frontend/assets/images/Slider_1.png"
                                            alt="carousel-img"
                                            className="img-fluid"
                                            width="350px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export {Header};