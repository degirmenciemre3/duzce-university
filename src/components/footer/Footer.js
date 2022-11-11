import React from 'react'
import "./footer.css"

function Footer() {
    const ourUniversity = ["Düzce", "Kuruluş", "Yönetim", "Kurumsal Kimlik", "Sıralamalar", "İlkler", "Kurumsal Strateji", "İdari birimler"]
    // const academic = ["Düzce", "Kuruluş", "Yönetim", "Kurumsal Kimlik", "Sıralamalar", "İlkler", "Kurumsal Strateji", "İdari birimler"]
    // const resource = ["Düzce", "Kuruluş", "Yönetim", "Kurumsal Kimlik", "Sıralamalar", "İlkler", "Kurumsal Strateji", "İdari birimler"]
    return <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <img src="https://duzce-university.netlify.app/assets/img/d%C3%BCbeyazlogopng.png" width="80px" height="80px" alt="" />
                            <div className="social-links mt-3">
                                <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Kullanışlı Linkler</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Personel</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Öğrenci</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Hastane</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Teknopark</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Sanat Galerisi</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Mezunlar</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Radyo Düet</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Diğer Servisler</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">DÜYayınlar</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">DÜDuyurular</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">

                                <div className="dropdown">
                                    <span>Üniversitemiz</span>
                                    <div className="dropdown-content">
                                        {ourUniversity.map((item, index) => (
                                            <p key={index}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">
                                <div className="dropdown">
                                    <span>Akademik</span>
                                    <div className="dropdown-content">
                                        {ourUniversity.map((item, index) => (
                                            <p key={index}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">
                                <div className="dropdown">
                                    <span>Araştırma</span>
                                    <div className="dropdown-content">
                                        {ourUniversity.map((item, index) => (
                                            <p key={index}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Misyonumuz</h4>
                        <p>Ülkemizde ve dünyada Uzaktan Eğitim alanındaki ihtiyaçları ve gelişmeleri izleyerek internet destekli öğretimde sunulan dersleri dinamik bir şekilde oluşturmak, bu alanda yeni projeler ortaya atmak ve geliştirmek, eğitimde kaliteyi ön planda tutmak, aynı zamanda yenilikçi, rekabetçi, araştırmalara açık bir merkez olmak.</p>
                    </div>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>Düzce Üniversitesi</span></strong> All Rights Reserved
            </div>
            <div className="credits">
                Bilgi İşlem Daire Başkanlığı - 2020 - 47
            </div>
        </div>
    </footer>
}

export default Footer
