import React from "react";

function CarouselImageActive(props) {
  return (
    <div class="carousel-item active">
      <img src={props.carouselImageActive} class="d-block w-100" alt="..." />
    </div>
  );
}
function CarouselImage(props) {
  return (
    <div class="carousel-item">
      <img src={props.carouselImage} class="d-block w-100" alt="..." />
    </div>
  );
}

export { CarouselImageActive, CarouselImage };
