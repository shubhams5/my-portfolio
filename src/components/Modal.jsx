import React from "react";
import Modal from "react-bootstrap/Modal";
import { CarouselImageActive, CarouselImage } from "./Carousel";

function refreshPage() {
  window.location.reload();
}

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
    >
      <Modal.Header>
        <h5 className="modalHeader">{props.modalHeader}</h5>
        <button
          type="button"
          onClick={refreshPage}
          class="btn btn-link close-btn"
        >
          <i class="fas fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <CarouselImageActive
              carouselImageActive={props.carouselImageActive}
            />
            <CarouselImage carouselImage={props.carouselImage} />
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer className="myModal-footer">
        <div>
          <h4 className="modal-title">{props.ModalTitle}</h4>
          <p className="modal-description">{props.modalSiteDescription}</p>
          <a
            type="button"
            class="modal-button btn btn-outline-success btn-sm"
            href={props.siteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-external-link-alt"></i> Visit Site
          </a>
        </div>
        <div></div>
      </Modal.Footer>
    </Modal>
  );
}
export default MyModal;
