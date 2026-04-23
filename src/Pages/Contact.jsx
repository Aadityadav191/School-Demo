import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <div className="contact-hero d-flex align-items-center text-white text-center">
        <div className="container">
          <h1 className="fw-bold display-4 text-success">Contact Us</h1>
          <p className="lead  text-success">
            We'd love to hear from you. Get in touch with AKSHARAA School.
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* CONTACT INFO */}
        <div className="row g-4 text-center mb-5">
          <div className="col-md-4">
            <div className="contact-card p-4">
              <div className="fs-1 mb-2 text-success">📍</div>
              <h5>Address</h5>
              <p className="text-muted small">
                AKSHARAA School, Kathmandu, Nepal
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4">
              <div className="fs-1 mb-2 text-success">📞</div>
              <h5>Phone</h5>
              <p className="text-muted small">+977-9841508235</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4">
              <div className="fs-1 mb-2 text-success">✉️</div>
              <h5>Email</h5>
              <p className="text-muted small">info@aksharaa.edu.np</p>
            </div>
          </div>
        </div>

        {/* FORM + MAP */}
        <div className="row g-5">
          {/* FORM */}
          <div className="col-lg-6">
            <div className="contact-form p-4 shadow-sm">
              <h4 className="text-success mb-3">Send a Message</h4>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button className="btn btn-success w-100">Send Message</button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="col-lg-6">
            <div className="map-container shadow-sm">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
