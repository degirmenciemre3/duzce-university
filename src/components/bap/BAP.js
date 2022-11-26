import React from "react";
import "./bap.css"
import CountUp from "react-countup";

function BAP() {
    const bap = [
        {
            class: "col-lg-4 col-md-6",
            name: "Devam Eden Projeler",
            icn: "bi bi-calendar4-week",
            data_purecounter_start: "0",
            data_purecounter_end: "286",
            data_purecounter_duration: "1",

        },
        {
            class: "col-lg-4 col-md-6 mt-5 mt-md-0",
            name: "Dış Kaynaklı Projeler",
            icn: "bi bi-journal-richtext",
            data_purecounter_start: "0",
            data_purecounter_end: "112",
            data_purecounter_duration: "1",

        },
        {
            class: "col-lg-4 col-md-6 mt-5 mt-lg-0",
            name: "Tamamlanan Projeler",
            icn: "bi bi-check-circle",
            data_purecounter_start: "0",
            data_purecounter_end: "939",
            data_purecounter_duration: "1",

        },
    ]


    return (

        <section id="facts" className="facts">

            <div id="bap" className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Bilimsel Araştırma Projeleri</h2>
                </div>

                <div className="row">
                    {bap.map((item, index) => (
                        <div
                            key={index}
                            className={item.class}>
                            <div className="count-box">
                                <i

                                    className={item.icn} ></i>
                                <span
                                    className="purecounter"
                                >
                                    <CountUp start={item.data_purecounter_start} end={item.data_purecounter_end} duration={item.data_purecounter_duration} delay={0} />
                                </span>
                                <p>
                                    <strong> {item.name}</strong>
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default BAP;
