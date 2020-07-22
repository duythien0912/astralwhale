import React, {useState, useMemo} from "react";
import {Header} from "../widget/header";
import {Footer} from "../widget/footer";
import {BannerDownloadApp} from "../widget/banner_download_app";

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
    <Header/>
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
    <BannerDownloadApp/>
    <Footer/>
</div>;


export default HomePage;
