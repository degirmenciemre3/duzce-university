import React from "react";
import "./hero-section.css";

function HeroSection() {

    const social = [
        {
            class: "twitter",
            link: "https://twitter.com/duzceuniversite",
        },
        {
            class: "facebook",
            link: "https://www.facebook.com/DuzceUniversite",
        },
        {
            class: "instagram",
            link: "https://www.instagram.com/duzceuniversite/",
        },
        {
            class: "linkedin",
            link: "https://www.linkedin.com/company/duzce-universitesi/",
        },
    ];
    return (
        <section id="hero" className="d-flex flex-column">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Düzce Üniversitesi</h1>
                <p>Değer Üreten Üniversite</p>
                <div className="social-links">
                    {social.map((item, index) => (
                        <a
                            key={index}
                            href={`${item.link}`} className={`${item.class}`}>
                            <i className={`bx bxl-${item.class}`}></i>
                        </a>
                    ))}
                </div>
            </div>
            <a className="yukari" href="/">
                <i className="bi bi-arrow-up-circle"></i>{" "}
            </a>
        </section>
    );
}

export default HeroSection;
