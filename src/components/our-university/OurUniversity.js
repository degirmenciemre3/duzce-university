import React from "react";
import "./our-university.css";
function OurUniversity() {
    const birimler = [
        "Fakülteleri",
        "Yüksekokulları",
        "Meslek Yüksekokulları",
        "Enstitüleri",
        "Merkezler",
    ];
    const resume = [
        {
            resumeTitle: "Düzce Kuruluş",
            resumeDesc:
                "Düzce Üniversitesi’nin temelleri, 1976 yılındaDüzce Meslek Yüksekokulu’nun açılışına kadar dayanmaktadır.",
            resumeDate: "1976-1992",
            resumeBody:
                "1992 yılında Bolu Abant İzzet Baysal Üniversitesi’nin kurulması ile farklı bir boyuta dönüşen Düzce Üniversitesi’nin üniversiteleşme süreci; Düzce Meslek Yüksekokulu’nun dışında Orman Fakültesi, Teknik Eğitim Fakültesi, Tıp Fakültesi,  Sağlık Yüksekokulu, Akçakoca Turizm İşletmeciliği ve Otelcilik Yüksekokulu ile Akçakoca Meslek Yüksekokulu’nun bu üniversiteye bağlı olarak açılmasıyla birlikte daha da hızlanmıştır. ",
        },
        {
            resumeTitle: "Rektör",
            resumeDesc:
                "Prof. Dr. Nedim SÖZBİR",
            resumeDate: "2022-NOW",
            resumeBody:
                "1986 yılında Yıldız Teknik Üniversitesi Kocaeli Müh. Fak. Mak. Müh. ve 1991 yılında  Yıldız Teknik Üniversitesi  F.B.E.  Mak. Y. Müh. olarak mezun oldu. 1986-1987 ve 1989-1990 yılları arasında Türkiye Gemi Sanayi A.Ş. Pendik-Sulzer Motor Fabrikası'nda Mak. Müh. olarak çalıştı. 1988-1989 tarihleri arasında Dz.K.K. Gemi Onarım Şubesi'nde Makine Asteğmen olarak askerlik görevini ifa etti. ",
        },
    ];
    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>ÜNİVERSİTEMİZ</h2>
                </div>
                <span className="uni-span">
                    Düzce Üniversitesi, 1 Mart 2006 tarih ve 5467 sayılı yasayla, Düzce'de
                    kurulmuş devlet üniversitesi. Üniversite, Abant İzzet Baysal
                    Üniversitesi'nin Düzce çevresindeki kampüsünden ayrılarak, yeni bir
                    üniversite kurulmasıyla meydana gelmiştir.
                </span>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Üniversitemiz</h3>
                        {resume.map((item, index) => (
                            <div key={index} className="resume-item">
                                <h4>  {item.resumeTitle}</h4>
                                <h5>
                                    {item.resumeDate}
                                </h5>
                                <p>
                                    <em>
                                        {item.resumeDesc}
                                    </em>
                                </p>
                                <p>
                                    {item.resumeBody}
                                </p>
                            </div>
                        ))}

                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Akademik Birimler</h3>
                        <div className="resume-item">

                            <h5>2006 - NOW</h5>
                            <p>
                                <em> </em>
                            </p>
                            <ul>
                                {birimler.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurUniversity;
