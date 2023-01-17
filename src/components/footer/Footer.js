import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
    //const ourUniversity = ["Düzce", "Kuruluş", "Yönetim", "Kurumsal Kimlik", "Sıralamalar", "İlkler", "Kurumsal Strateji", "İdari birimler"]
    //
    const ourUniversity = [
        {
            name: "Düzce",
            link: "/duzce",
        },
        {
            name: "Kuruluş",
            link: "/kurulus",
        },
        {
            name: "Yönetim",
            link: "/yonetim",
        },
        {
            name: "Kurumsal Kimlik",
            link: "/kurumsal-kimlik",
        },
        {
            name: "Sıralamalar",
            link: "/siralamalar",
        },
        {
            name: "İlkler",
            link: "/ilkler",
        },
        {
            name: "Kurumsal Strateji",
            link: "/kurumsal-strateji",
        },
        {
            name: "İdari birimler",
            link: "/idari-birimler",
        },
    ];
    const academic = [
        {
            name: "Fakülteler",
            link: "/fakulteler",
        },
        {
            name: "Enstitüler",
            link: "/enstituler",
        },
        {
            name: "YüksekOkullar",
            link: "/yuksek-okullar",
        },
        {
            name: "Meslek YüksekOkulları",
            link: "/meslek-yuksek",
        },
        {
            name: "Kurullar",
            link: "/kurullar",
        },
    ];
    const resource = [
        {
            name: "Araştırma Merkezleri",
            link: "/arastirma-merkezleri",
        },
        {
            name: "Laboratuvar",
            link: "/laboratuvar",
        },
        {
            name: "Yayınlar",
            link: "/yayinlar",
        },
        {
            name: "hakemli dergiler",
            link: "/hakemli-dergiler",
        },
        {
            name: "Teknoloji Transfer Ofisi",
            link: "/tto",
        },
    ];
    const usefulLinks = [
        {
            name: "Personel",
            link: "/personel",
        },
        {
            name: "Öğrenci",
            link: "/ogrenci",
        },
        {
            name: "Hastane",
            link: "/hastane",
        },
        {
            name: "Teknopark",
            link: "/teknopark",
        },
        {
            name: "Sanat Galerisi",
            link: "/sanat-galerisi",
        },
        {
            name: "Mezunlar",
            link: "/mezunlar",
        },
        {
            name: "Radyo Düet",
            link: "/radyo-duet",
        },
    ];

    console.log(academic.map((item, index) => item.link));
    // const resource = ["Düzce", "Kuruluş", "Yönetim", "Kurumsal Kimlik", "Sıralamalar", "İlkler", "Kurumsal Strateji", "İdari birimler"]
    const navigate = useNavigate();
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <img
                                    src="https://cdn.duzce.edu.tr/File/GetFile/216e0157-c3b1-4cb4-b324-254c6e3e6cf8"
                                    width="150rem"
                                    height="100rem"
                                    alt="duzce-logo"
                                />
                                <div className="social-links mt-3">
                                    <a href="/" className="twitter">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                    <a href="/" className="facebook">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a href="/" className="instagram">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    <a href="/" className="linkedin">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Kullanışlı Linkler</h4>
                            <ul>
                                {usefulLinks.map((item, index) => (
                                    <p key={index} onClick={() => navigate(`${item.link}`)}>
                                        <li>
                                            <i className="bx bx-chevron-right"></i>
                                            <span>{item.name}</span>
                                        </li>
                                    </p>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Diğer Servisler</h4>
                            <ul>
                            <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <span onClick={() => navigate(`/login`)}> Login</span>

                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <span onClick={() => navigate(`/yayınlar`)}> DÜYayınlar</span>

                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <span onClick={() => navigate(`/duyuru`)}> DÜDuyurular</span>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>

                                    <div className="dropdown">
                                        <span>Üniversitemiz</span>
                                        <div className="dropdown-content">
                                            {ourUniversity.map((item, index) => (
                                                <p key={index} onClick={() => navigate(`${item.link}`)}>
                                                    {item.name}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <div className="dropdown">
                                        <span>Akademik</span>
                                        <div className="dropdown-content">
                                            {academic.map((item, index) => (
                                                <p key={index} onClick={() => navigate(`${item.link}`)}>
                                                    {item.name}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <div className="dropdown">
                                        <span>Araştırma</span>
                                        <div className="dropdown-content">
                                            {resource.map((item, index) => (
                                                <p key={index} onClick={() => navigate(`${item.link}`)}>
                                                    {item.name}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Misyonumuz</h4>
                            <p>
                                Ülkemizde ve dünyada Uzaktan Eğitim alanındaki ihtiyaçları ve
                                gelişmeleri izleyerek internet destekli öğretimde sunulan
                                dersleri dinamik bir şekilde oluşturmak, bu alanda yeni projeler
                                ortaya atmak ve geliştirmek, eğitimde kaliteyi ön planda tutmak,
                                aynı zamanda yenilikçi, rekabetçi, araştırmalara açık bir merkez
                                olmak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{" "}
                    <strong>
                        <span>Düzce Üniversitesi</span>
                    </strong>{" "}
                    All Rights Reserved
                </div>
                <div className="credits">Bilgi İşlem Daire Başkanlığı - 2020 - 47</div>
            </div>
        </footer>
    );
}

export default Footer;
