import React from "react";
import Card from "./Card";
import data from "../data";
import Slide from "react-reveal/Slide";

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="container-fluid contenedor text-center">
        <Slide right>
          <div className="heading" id="aboutHeading">
            PROJECTS
          </div>
        </Slide>
        <Slide right>
          <div className="header-bar" />
        </Slide>
        <div className="container-fluid project-collection text-center">
          <h4 className="label-thin card-label">HTML / CSS / JS</h4>
          <div className="row justify-content-center">
            {data.map((data) => (
              <Card
                key={data.id}
                image={data.image}
                Title={data.Title}
                modalSiteDescription={data.modalSiteDescription}
                siteName={data.siteName}
                siteLang={data.siteLang}
                carouselImageActive={data.carouselImageActive}
                carouselImage={data.carouselImage}
                siteLink={data.siteLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
