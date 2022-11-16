import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./header.css"

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <a href="/" className="active">
                <img width="120px" src='https://sosyalsorumluluk.duzce.edu.tr/Content/Images/logo.png' alt='' />
            </a>
            <nav ref={navRef}>
                <a href="#bap">BAP</a>
                <a href="#duyuruslide">Duyurular</a>
                <a href="#universitemiz">Üniversitemiz</a>
                <a href="#contact">Contact</a>
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