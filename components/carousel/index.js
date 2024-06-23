import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const smallSlideImage = {
  width: "90px",
};

const showSlideImage = {
  width: "568px",
  height: "501px",
};

const productDetailSlides = [
  <img key={"slideproduct1"} style={showSlideImage} src={"/assets/images/homepage/Big-Image-4.jpg"} />,
  <img key={"slideproduct2"} style={showSlideImage} src={"/assets/images/homepage/Big-Image-5.jpg"} />,
  <img key={"slideproduct3"} style={showSlideImage} src={"/assets/images/homepage/Big-image.jpg"} />,
  <img key={"slideproduct4"} style={showSlideImage} src={"/assets/images/homepage/Big-Image-2.jpg"} />,
  <img key={"slideproduct5"} style={showSlideImage} src={"/assets/images/homepage/Big-Image-3.jpg"} />,
];

const CarouselGallery = () => {
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  }));

  const img = [
    {
      key: "slideproduct1",
      src: `/assets/images/homepage/Big-image.jpg`,
    },
    {
      key: "slideproduct2",
      src: `/assets/images/homepage/Big-Image-5.jpg`,
    },
    {
      key: "slideproduct3",
      src: `/assets/images/homepage/Big-Image.jpg`,
    },
    {
      key: "slideproduct4",
      src: `/assets/images/homepage/Big-Image-2.jpg`,
    },
    {
      key: "slideproduct5",
      src: `/assets/images/homepage/Big-Image-3.jpg`,
    },
  ];

  const tWidth = 100 / img.length + "%";

  return <Carousel thumbnailWidth={tWidth} hasDotButtons={false} hasIndexBoard={false} hasLeftButton={false} hasRightButton={false} hasSizeButton={false} hasMediaButton={false} images={img} />;
};

export default CarouselGallery;
