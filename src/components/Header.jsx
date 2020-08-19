import React from "react";
import Effects from "./Effects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jump from "react-reveal/Jump";

function Header() {
  Effects();
  return (
    <section className="title-section" id="home">
      {/* <!--Title--> */}
      <Container fluid>
        <Row style={{ display: "block" }}>
          <Col lg={"auto"}>
            <h1 className="big-heading">
              <Jump>Hello</Jump> I'm &nbsp;
              <span className="highlight">Shubham Suryawanshi</span>.
              <br />
              I'm a full-stack web developer.
            </h1>

            <a href="#about" class="about-button btn btn-outline-light">
              <div class="icons">
                <i class="fa fa-arrow-right icon-default"></i>
                <i class="fa fa-arrow-down icon-hover"></i>
                <span>View my work</span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>

      <nav id="myHeader" class="navbar navbar-expand-lg navbar-dark">
        <div id="navbarSupportedContent">
          <ul class="navbar-nav" style={{ flexDirection: "row" }}>
            <li class="nav-item">
              <a class="nav-link" id="nav-home" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-about" href="#about">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-project" href="#work">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-contact" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
