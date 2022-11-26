import React from "react";
import "./hero-section.css"

function HeroSection() {
    /*
        const social = [
            {
                class: "instagram",
                name: "Instagram",
                img: "https://img.icons8.com/ios/512/instagram-new.png",
                url: "#"
            },
            {
                class: "facebook",
                name: "Facebook",
                img: "https://img.icons8.com/ios/512/facebook-new.png",
                url: "#"
    
            },
            {
                class: "twitter",
                name: "Twitter",
                img: "https://img.icons8.com/ios/512/twitter.png",
                url: "#"
    
            },
            {
                class: "youtube",
                name: "Youtube",
                img: "https://img.icons8.com/ios/512/youtube-play.png",
                url: "#"
    
            },
            {
                class: "whatsapp",
                name: "Whatsapp",
                img: "https://img.icons8.com/ios/512/whatsapp.png",
                url: "#"
    
            },
    
        ]*/

    return (
        <section id="hero" className="d-flex flex-column">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Düzce Üniversitesi</h1>
                <p>Değer Üreten Üniversite</p>
                <div className="social-links">
                    <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
