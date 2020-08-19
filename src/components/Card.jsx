import React from "react";
import MyModal from "./Modal";
import Fade from "react-reveal/Fade";

function Card(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fade bottom>
      <div className="col-lg-auto container_foto ">
        <div className="ver_mas text-center">
          <article className="text-center">
            <h2>{props.siteName}</h2>
            <h4>{props.siteLang}</h4>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              onClick={() => setModalShow(true)}
            >
              Learn More
            </button>
            <MyModal
              modalHeader={props.siteLang}
              ModalTitle={props.Title}
              show={modalShow}
              onHide={() => setModalShow(false)}
              carouselImageActive={props.carouselImageActive}
              carouselImage={props.carouselImage}
              modalSiteDescription={props.modalSiteDescription}
              siteLink={props.siteLink}
            />
          </article>
        </div>
        <img src={props.image} alt="" />
      </div>
    </Fade>
  );
}
export default Card;
