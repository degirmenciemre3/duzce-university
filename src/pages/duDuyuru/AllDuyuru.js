import React from 'react'
import "./duduyuru.css"

function AllDuyuru({ name, desc, img, icn, index }) {
    console.log("name:", name);
    console.log("desc:", desc);
    console.log("img:", img);
    console.log("index:", index);
    return (
        <div
            className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100"
        >
            <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={`${img}`} alt="" class="img-fluid" />
            </div>

            <h3>{name} </h3>
            <p className="fst-italic">
                {desc}
            </p>
            <ul>
                <li><i className={`${icn}`}></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className={`${icn}`}></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className={`${icn}`}></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
                {desc} {desc}
            </p>
            <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={`${img}`} alt="" class="img-fluid" />
            </div>

        </div>
    )
}

export default AllDuyuru
