import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./header.css"

const Header = () => {
    const navRef = useRef();
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    };

    const kisayol = [
        {
            name: "Duyurular",
            link: "/duyuru"
        },
        {
            name: "Yayınlar",
            link: "/yayinlar"
        },
        {
            name: "Personel",
            link: "/personel"
        },
        {
            name: "Öğrenci",
            link: "/ogrenci"
        },
        {
            name: "Hastane",
            link: "/hastane"
        },
        {
            name: "Teknopark",
            link: "/teknopark"
        },
    ]

    return (
        <header>
            <p onClick={() => navigate(`/`)} className="active">
                <img width="120px" src='https://sosyalsorumluluk.duzce.edu.tr/Content/Images/logo.png' alt='' />
            </p>
            <nav ref={navRef}>
                {kisayol.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => navigate(`${item.link}`)}
                    >
                        {item.name}
                    </p>
                ))}


                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    )
}

export default Header;

/*
        ------
        <a href="#home" className="active">
                    <img width="40px" src='https://duzce-university.netlify.app/assets/img/d%C3%BCbeyazlogopng.png' alt='' />
                </a>
                <a href="#bap">BAP</a>
                <a href="#duyuruslide">Duyurular</a>
                <a href="#universitemiz">Üniversitemiz</a>
                <a href="#contact">Contact</a>
*/