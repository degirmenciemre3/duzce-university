import React from 'react'
import "./call-to-video.css"
function CallToVideo() {
    return <section id="call-to-action" className="call-to-action">

        <div className="container text-center" data-aos="zoom-out">
            <a
                aria-hidden="true"
                href="https://www.youtube.com/watch?v=R9ih2qdxOCo"
                className="glightbox play-btn"
                target="_blank"
                rel="noreferrer"
            >

            </a>

            <h3>Düzce Üniversitesi</h3>
            <p>Tanıtım Videosu</p>
            <a className="cta-btn" href="https://www.youtube.com/watch?v=R9ih2qdxOCo" rel="noopener">Tıklayın</a>
        </div>
    </section>
}

export default CallToVideo
