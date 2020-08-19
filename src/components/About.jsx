import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "@mdi/react";
import {
  mdiSpeedometer,
  mdiMonitorCellphone,
  mdiLightbulbOnOutline,
  mdiRocket,
} from "@mdi/js";
import Progress from "./Progress";

function About() {
  return (
    <section className="about-section" id="about">
      {/* <!--About--> */}
      <Container fluid>
        <div className="heading" id="aboutHeading">
          <Fade left>ABOUT</Fade>
        </div>
        <Fade left>
          <div className="header-bar" />
        </Fade>
      </Container>
      <Container fluid className="circle-group">
        <Row>
          <Col className="feature-box" lg={3}>
            <Flip>
              <div className="circle">
                <Icon
                  path={mdiSpeedometer}
                  style={{ width: "4.75rem", height: "5.75rem" }}
                />
              </div>
            </Flip>
            <Fade>
              <h3 className="label-bold">Fast</h3>
              <p className="label-thin">
                Fast load times and lag free interaction, my highest priority.
              </p>
            </Fade>
          </Col>
          <Col className="feature-box" lg={3}>
            <Flip>
              <div className="circle">
                <Icon
                  path={mdiMonitorCellphone}
                  style={{ width: "3.75rem", height: "6.75rem" }}
                />
              </div>
            </Flip>
            <Fade>
              <h3 className="label-bold">Responsive</h3>
              <p className="label-thin">
                My layouts will work on any device, big or small.
              </p>
            </Fade>
          </Col>
          <Col className="feature-box" lg={3}>
            <Flip>
              <div className="circle">
                <Icon
                  path={mdiLightbulbOnOutline}
                  style={{ width: "3.75rem", height: "5.75rem" }}
                />
              </div>
            </Flip>
            <Fade>
              <h3 className="label-bold">Intuitive</h3>
              <p className="label-thin">
                Strong preference for easy to use, intuitive UX/UI.
              </p>
            </Fade>
          </Col>
          <Col className="feature-box" lg={3}>
            <Flip>
              <div className="circle">
                <Icon
                  path={mdiRocket}
                  style={{ width: "3.75rem", height: "5.75rem" }}
                />
              </div>
            </Flip>
            <Fade>
              <h3 className="label-bold">Dynamic</h3>
              <p className="label-thin">
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container className="image-bar" fluid>
        <Row>
          <Col lg={6} style={{ padding: "25px" }}>
            <Slide left>
              <div>
                <img
                  className="display-image"
                  src={"./images/circle-cropped.png"}
                  alt="Shubham's DP"
                />
              </div>
              <h3 className="label-bold">Well, Who's this guy?</h3>
              <p className="label-thin">
                I'm a Full-Stack Web Developer from Pune, Maharashtra. I have
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences. Let's make something
                special.
              </p>
            </Slide>
          </Col>
          <Col lg={6}>
            <div className="progress-bar-group">
              <Progress
                barTag="CSS"
                width="75"
                ariaVoluenow="75"
                percentage="95%"
              />
              <Progress
                barTag="React"
                width="65"
                ariaVoluenow="65"
                percentage="80%"
              />
              <Progress
                barTag="JavaScript"
                width="70"
                ariaVoluenow="70"
                percentage="85%"
              />
              <Progress
                barTag="Node.js"
                width="55"
                ariaVoluenow="55"
                percentage="65%"
              />
              <Progress
                barTag="Bootstrap"
                width="70"
                ariaVoluenow="70"
                percentage="85%"
              />
              <Progress
                barTag="MongoDB"
                width="55"
                ariaVoluenow="55"
                percentage="65%"
              />
              <Progress
                barTag="UI Design"
                width="40"
                ariaVoluenow="40"
                percentage="50%"
              />
              <Progress
                barTag="Photoshop"
                width="75"
                ariaVoluenow="75"
                percentage="95%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
