import React, { useState } from "react";
import AllDuyuru from "./AllDuyuru";
import "./duduyuru.css";

function DuDuyuru() {
    const [duyuruFilter, setDuyuruFilter] = useState("BUGUNDU");
    const duyurular = [
        {
            name: "Bugün Dü",
            filters: "BUGUNDU",
            icn: "bi bi-newspaper",
        },
        {
            name: "Haber",
            filters: "HABER",
            icn: "bi bi-megaphone",
        },
        {
            name: "Etkinlik",
            filters: "ETKINLIK",
            icn: "bi bi-calendar-event",
        },
        {
            name: "Ziyaret",
            filters: "ZIYARET",
            icn: "bi bi-airplane-engines",
        },
        {
            name: "Kurum Dışı",
            filters: "KURUMDISI",
            icn: "bi bi-building",
        },
        {
            name: "Tüm Duyurular",
            filters: "TUMDUYURULAR",
            icn: "bi bi-archive",
        },
    ];

    const alanlar = [
        {
            name: "Bugün Dü",
            filters: "BUGUNDU",
            desc: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: "https://nobi.co.id/assets/img/features-1.svg",
            icn: "bi bi-newspaper",
        },
        {
            name: "Haber",
            filters: "HABER",
            desc: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: "https://digi.usac.edu.gt/bvsalud/vcovid/covid_1/assets/img/features-1.svg",
            icn: "bi bi-megaphone",
        },
        {
            name: "Etkinlik",
            filters: "ETKINLIK",
            desc: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

            img: "../../assests/img/features/features-3.svg",
            icn: "bi bi-calendar-event",
        },
        {
            name: "Ziyaret",
            filters: "ZIYARET",
            desc: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

            img: "../../assests/img/features/features-4.svg",
            icn: "bi bi-airplane-engines",
        },
        {
            name: "Kurum Dışı",
            filters: "KURUMDISI",
            desc: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

            img: "../../assests/img/features/features-5.svg",
            icn: "bi bi-building",
        },
        {
            name: "Tüm Duyurular",
            filters: "TUMDUYURULAR",
            desc: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

            img: "../../assests/img/features/features-6.svg",
            icn: "bi bi-archive",
        },
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <ul className="nav nav-tabs row gy-4 d-flex">
                    {duyurular.map((item, index) => (
                        <li key={index} className="nav-item col-6 col-md-4 col-lg-2">
                            <a
                                className={`nav-link ${duyuruFilter === item.filters ? "active" : ""
                                    }`}
                                data-bs-toggle="tab"
                                data-bs-target="#tab-1"
                                onClick={() => setDuyuruFilter(item.filters)}
                                href="/"
                            >
                                {console.log(duyuruFilter)}
                                <i className={`${item.icn}`}></i>
                                <h4>{item.name} </h4>
                            </a>
                        </li>
                    ))}
                </ul>
                {alanlar.map((item, index) => (
                    <div className="tab-content" id={`tab-${index + 1}`}>
                        <div className="tab-pane active show">
                            <div className="row gy-4" key={index}>
                                {duyuruFilter === `${item.filters}` && (
                                    <AllDuyuru
                                        name={item.name}
                                        desc={item.desc}
                                        img={item.img}
                                        icn={item.icn}
                                        index={index + 1}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DuDuyuru;
