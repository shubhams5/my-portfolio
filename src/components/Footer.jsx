import React from "react";

function Footer() {
  return (
    <footer>
      <a type="button" href="#home" class="doubleup-btn btn btn-light">
        <i
          class="fas fa-angle-double-up"
          style={{ padding: "5px 0", fontSize: "25px" }}
        ></i>
      </a>
      <div class="button-group">
        <a
          type="button"
          target="_blank"
          href="https://www.linkedin.com/in/suryashubham52/"
          rel="noopener noreferrer"
          class="social-btn btn btn-outline-light linkedin"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          type="button"
          target="_blank"
          href="https://github.com/shubhams5"
          rel="noopener noreferrer"
          class="social-btn btn btn-outline-light github"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          type="button"
          target="_blank"
          href="https://twitter.com/shubhamssurya1"
          rel="noopener noreferrer"
          class="social-btn btn btn-outline-light twitter"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          type="button"
          target="_blank"
          href="https://www.instagram.com/shubhams_5/"
          rel="noopener noreferrer"
          class="social-btn btn btn-outline-light instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div class="info-box">
        <div class="footnote">
          SHUBHAM SURYAWANSHI <span class="highlight-footer"> © 2020</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
