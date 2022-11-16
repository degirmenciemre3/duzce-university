import React from 'react'
import "./contact.css"

function Contact() {
  return <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>İletişim</h2>
        <p>Konum</p>
      </div>

      <div>
        <iframe
          className='iframe-1'
          id="frame1"
          rel="noopener noreferrer"
          style={{ border: 0, width: "100% ", height: "270px" }}
          src="https://maps.google.com/maps?q=d%C3%BCzce%20%C3%BCniversitesi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" allowFullScreen />
      </div>

      <div className="row mt-5">

        <div className="col-lg-12">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Lokasyon:</h4>
              <p>Düzce Üniversitesi Konuralp Yerleşkesi, Düzce University Üskübü Campus 81620 DÜZCE - TÜRKİYE</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Tel:</h4>
              <p>0850 800 81 81</p>
            </div>

          </div>

        </div>
        {/* 
         <div className="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>*/}

      </div>

    </div>
  </section>
}

export default Contact
