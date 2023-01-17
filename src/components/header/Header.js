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
            link: "/duyuru",
            yenilink:false
        },
        {
            name: "Yayınlar",
            link: "/yayinlar",
            yenilink:false
        },
        {
            name: "Personel",
            link: "https://ebys.duzce.edu.tr/enVision/Login.aspx",
            yenilink:true
        },
        {
            name: "Öğrenci",
            link: "https://obs.duzce.edu.tr/",
            yenilink:true
        },
        {
            name: "Hastane",
            link: "https://hastane.duzce.edu.tr/",
            yenilink:true
        },
        {
            name: "Teknopark",
            link: "https://www.duzceteknopark.com/",
            yenilink:true
        },
    ]

const handleClick = (link,yenilink) => {
    if(yenilink){
        window.open(link, "_blank");
    }else{
        navigate(link);
    }
}


    return (
        <header>
            <p onClick={() => navigate(`/`)} className="active">
                <img width="120px" src='https://sosyalsorumluluk.duzce.edu.tr/Content/Images/logo.png' alt='' />
            </p>
            <nav ref={navRef}>
                {kisayol.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => handleClick(item.link,item.yenilink)}
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