import React from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f8f8f8" stroke="#f8f8f8"></path>
      </svg>
      <div class="container">
        <div className="heading contact" id="contactHeading">
          <Fade left>CONTACT</Fade>
        </div>
        <Fade left>
          <div className="header-bar contact" id="contact-header-bar" />
        </Fade>
        <Fade right>
          <p>Have a question or want to work together?</p>
        </Fade>
        <Pulse>
          <form class="contact-form">
            <div class="form-group form-row">
              <div class="col-4">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email address: name@example.com"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <div class="col-4">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <button type="button" class="btn btn-outline-light contact-button">
              SUBMIT
            </button>
          </form>
        </Pulse>
      </div>
    </section>
  );
}

export default Contact;
