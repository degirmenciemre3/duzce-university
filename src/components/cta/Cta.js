import React from 'react'
import "./cta.css"

function Cta() {
    return <section id="cta" className="cta mt-5">
        <div id='About' className="container" data-aos="zoom-out">

            <div className="row g-5">

                <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                    <h3><em>Değer üreten üniversite</em> Düzce üniversitesi</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ducimus soluta commodi recusandae iure?
                        Quisquam, ipsam quibusdam,
                        autem facilis nemo explicabo ab temporibus qui consequatur praesentium
                        voluptas, aut molestias totam repellat!</p>
                    <a className="cta-btn align-self-start"
                        rel="noreferrer"
                        href="/duyuru">Detaylar</a>
                </div>

                <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                    <div className="img">
                        <img src="https://www.duzcepusula.com/images/haberler/2022/04/duzce-universitesi-atom-as-yi-kurdu.jpg" alt="" className="img-fluid" />
                    </div>
                </div>

            </div>

        </div>
    </section>
}

export default Cta
