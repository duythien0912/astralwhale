import React, {useState, useMemo} from "react";

let counter = 0;
const getOptions = () => {
    console.log(counter === 0 ? "definition" : "unnecessary redefinition");
    return [1, 2, 3, 4, 5];
};

function HomePage() {
    const [selected, setSelected] = useState();
    const options = useMemo(() => getOptions(), []); // remove the useMemo to see how much more often getOptions is called

    const optionComponents = () => {
        return options.map(opt => (
            <option key={opt} selected={opt === selected} value={opt}>
                {opt}
            </option>
        ));
    };

    console.log(counter++);

    return (
        <HomeBody/>
        // <div>
        //     <select onChange={({target}) => setSelected(target.value)}>
        //         {optionComponents()}
        //     </select>
        //     <h1>{selected}</h1>
        // </div>
    );
}

var HomeBody = () => <div>
    <div className="edica-loader"/>
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
    <main>
        <section className="edica-landing-section edica-landing-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up-right">
                        <h4 className="edica-landing-section-subtitle-alt">ABOUT US</h4>
                        <h2 className="edica-landing-section-title">
                            1000+ customer using Our application.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipng elit, sed do
                            eiusmod tempor incididunt ut labore aliqua. Ut enim que minim
                            veniam, quis nostrud exercitation.
                        </p>
                        <ul className="landing-about-list">
                            <li>Powerful and flexible theme</li>
                            <li>Simple, transparent pricing</li>
                            <li>Build tools and full documention</li>
                        </ul>
                    </div>
                    <div className="col-md-6" data-aos="fade-up-left">
                        <img
                            src="static/frontend/assets/images/phone-copy.png"
                            width="468px"
                            alt="about"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="edica-landing-section edica-landing-clients">
            <div className="container">
                <h4 className="edica-landing-section-subtitle-alt">PARTNER WITH US</h4>
                <div className="partners-wrapper">
                    <img
                        src="static/frontend/assets/images/Partner_1.png"
                        alt="client logo"
                        data-aos="flip-right"
                        data-aos-delay={250}
                    />
                    <img
                        src="static/frontend/assets/images/Partner_2.png"
                        alt="client logo"
                        data-aos="flip-right"
                        data-aos-delay={500}
                    />
                    <img
                        src="static/frontend/assets/images/Partner_3.png"
                        alt="client logo"
                        data-aos="flip-right"
                        data-aos-delay={750}
                    />
                    <img
                        src="static/frontend/assets/images/Partner_4.png"
                        alt="client logo"
                        data-aos="flip-right"
                        data-aos-delay={1000}
                    />
                    <img
                        src="static/frontend/assets/images/Partner_5.png"
                        alt="client logo"
                        data-aos="flip-right"
                        data-aos-delay={1250}
                    />
                    <img
                        src="static/frontend/assets/images/Partner_6.png"
                        alt="client logo"
                        data-aos="flip-right"
                        data-aos-delay={1500}
                    />
                </div>
            </div>
        </section>
        <section className="edica-landing-section edica-landing-services">
            <div className="container">
                <h4 className="edica-landing-section-subtitle">Service We Offer</h4>
                <h2 className="edica-landing-section-title">
                    What features you will <br/> Get from App.
                </h2>
                <div className="row">
                    <div className="col-md-6 landing-service-card" data-aos="fade-right">
                        <img
                            src="static/frontend/assets/images/picture.svg"
                            alt="card img"
                            className="img-fluid service-card-img"
                        />
                        <h4 className="service-card-title">Live Video</h4>
                        <p className="service-card-description">
                            He has led a remarkable campaign, defying the traditional
                            mainstream parties courtesy of his En Marche! movement. For many,
                            however, the.
                        </p>
                    </div>
                    <div className="col-md-6 landing-service-card" data-aos="fade-left">
                        <img
                            src="static/frontend/assets/images/internet.svg"
                            alt="card img"
                            className="img-fluid service-card-img"
                        />
                        <h4 className="service-card-title">Secure and Reliable</h4>
                        <p className="service-card-description">
                            He has led a remarkable campaign, defying the traditional
                            mainstream parties courtesy of his En Marche! movement. For many,
                            however, the.
                        </p>
                    </div>
                    <div className="col-md-6 landing-service-card" data-aos="fade-right">
                        <img
                            src="static/frontend/assets/images/goal.svg"
                            alt="card img"
                            className="img-fluid service-card-img"
                        />
                        <h4 className="service-card-title">Fast. Instantly.</h4>
                        <p className="service-card-description">
                            He has led a remarkable campaign, defying the traditional
                            mainstream parties courtesy of his En Marche! movement. For many,
                            however, the.
                        </p>
                    </div>
                    <div className="col-md-6 landing-service-card" data-aos="fade-left">
                        <img
                            src="static/frontend/assets/images/chat-bubble.svg"
                            alt="card img"
                            className="img-fluid service-card-img"
                        />
                        <h4 className="service-card-title">Built-in Messenger</h4>
                        <p className="service-card-description">
                            He has led a remarkable campaign, defying the traditional
                            mainstream parties courtesy of his En Marche! movement. For many,
                            however, the.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section
            className="edica-landing-section edica-landing-testimonials"
            data-aos="fade-up"
        >
            <div className="container">
                <div
                    id="edicaLandingTestimonialCarousel"
                    className="carousel slide landing-testimonial-carousel"
                    data-ride="carousel"
                >
                    <div className="text-center py-4">
                        <img src="static/frontend/assets/images/quote.svg" alt="quote"/>
                    </div>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item">
                            <blockquote className="testimonial">
                                <p>
                                    “My mission in life is not merely to survive, but to thrive;
                                    and to do so with some passion, some compassion, some humor,
                                    and some style.”{" "}
                                </p>
                            </blockquote>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="testimonial">
                                <p>
                                    “My mission in life is not merely to survive, but to thrive;
                                    and to do so with some passion, some compassion, some humor,
                                    and some style.”{" "}
                                </p>
                            </blockquote>
                        </div>
                        <div className="carousel-item active">
                            <blockquote className="testimonial">
                                <p>
                                    “My mission in life is not merely to survive, but to thrive;
                                    and to do so with some passion, some compassion, some humor,
                                    and some style.”{" "}
                                </p>
                            </blockquote>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="testimonial">
                                <p>
                                    “My mission in life is not merely to survive, but to thrive;
                                    and to do so with some passion, some compassion, some humor,
                                    and some style.”{" "}
                                </p>
                            </blockquote>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="testimonial">
                                <p>
                                    “My mission in life is not merely to survive, but to thrive;
                                    and to do so with some passion, some compassion, some humor,
                                    and some style.”{" "}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li
                            data-target="#edicaLandingTestimonialCarousel"
                            data-slide-to={0}
                        >
                            <img src="static/frontend/assets/images/oval-copy-3.png" alt="avatar"/>
                            <div className="user-details">
                                <h6>Gabie Sheber</h6>
                                <p>Developer</p>
                            </div>
                        </li>
                        <li
                            data-target="#edicaLandingTestimonialCarousel"
                            data-slide-to={1}
                        >
                            <img src="static/frontend/assets/images/oval-copy-4.png" alt="avatar"/>
                            <div className="user-details">
                                <h6>Gabie Sheber</h6>
                                <p>Developer</p>
                            </div>
                        </li>
                        <li
                            data-target="#edicaLandingTestimonialCarousel"
                            data-slide-to={2}
                            className="active"
                        >
                            <img src="static/frontend/assets/images/oval.png" alt="avatar"/>
                            <div className="user-details">
                                <h6>Gabie Sheber</h6>
                                <p>Developer</p>
                            </div>
                        </li>
                        <li
                            data-target="#edicaLandingTestimonialCarousel"
                            data-slide-to={3}
                        >
                            <img src="static/frontend/assets/images/oval-copy.png" alt="avatar"/>
                            <div className="user-details">
                                <h6>Gabie Sheber</h6>
                                <p>Developer</p>
                            </div>
                        </li>
                        <li
                            data-target="#edicaLandingTestimonialCarousel"
                            data-slide-to={4}
                        >
                            <img src="static/frontend/assets/images/oval-copy-2.png" alt="avatar"/>
                            <div className="user-details">
                                <h6>Gabie Sheber</h6>
                                <p>Developer</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        <section className="edica-landing-section edica-landing-blog">
            <div className="container">
                <h4 className="edica-landing-section-subtitle" data-aos="fade-up">
                    Blog posts
                </h4>
                <h2 className="edica-landing-section-title" data-aos="fade-up">
                    Check our app latest blog post <br/> for more update.
                </h2>
                <div className="row">
                    <div className="col-md-4 landing-blog-post" data-aos="fade-right">
                        <img
                            src="static/frontend/assets/images/rectangle.png"
                            alt="blog post"
                            className="blog-post-thumbnail"
                        />
                        <p className="blog-post-category">Blog post</p>
                        <h4 className="blog-post-title">
                            Check our latest blog post for more update.
                        </h4>
                        <a href="#!" className="blog-post-link">
                            Learn more
                        </a>
                    </div>
                    <div className="col-md-4 landing-blog-post" data-aos="fade-up">
                        <img
                            src="static/frontend/assets/images/rectangle-copy.png"
                            alt="blog post"
                            className="blog-post-thumbnail"
                        />
                        <p className="blog-post-category">Blog post</p>
                        <h4 className="blog-post-title">
                            Check our latest blog post for more update.
                        </h4>
                        <a href="#!" className="blog-post-link">
                            Learn more
                        </a>
                    </div>
                    <div className="col-md-4 landing-blog-post" data-aos="fade-left">
                        <img
                            src="static/frontend/assets/images/rectangle-copy-2.png"
                            alt="blog post"
                            className="blog-post-thumbnail"
                        />
                        <p className="blog-post-category">Blog post</p>
                        <h4 className="blog-post-title">
                            Check our latest blog post for more update.
                        </h4>
                        <a href="#!" className="blog-post-link">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="edica-landing-section edica-landing-blog-posts">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div
                            className="blog-post-card blog-post-1 mb-4 mb-md-0"
                            data-aos="fade-right"
                        >
                            <p className="post-category">App Design</p>
                            <h2 className="post-title">
                                Check our latest blog post for more update.
                            </h2>
                            <a href="#!" className="post-link">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-post-card blog-post-2" data-aos="fade-left">
                            <p className="post-category">App Design</p>
                            <h2 className="post-title">
                                Check our latest blog post for more update.
                            </h2>
                            <a href="#!" className="post-link">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
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
</div>;


export default HomePage;
