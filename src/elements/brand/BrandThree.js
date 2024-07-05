import React from "react";

const BrandList = [
  {
    image: "./images/brand/image-01.png",
  },
  {
    image: "./images/brand/image-02.png",
  },
  {
    image: "./images/brand/image-03.png",
  },
  {
    image: "./images/brand/image-04.png",
  },
  {
    image: "./images/brand/image-05.png",
  },
  {
    image: "./images/brand/image-06.png",
  },
  {
    image: "./images/brand/image-07.png",
  },
  {
    image: "./images/brand/image-08.png",
  },
  {
    image: "./images/brand/image-09.png",
  },
  {
    image: "./images/brand/image-10.png",
  },
  {
    image: "./images/brand/image-11.png",
  },
  {
    image: "./images/brand/image-12.png",
  },
  {
    image: "./images/brand/image-13.png",
  },
  {
    image: "./images/brand/brand-11.png",
  },
];

const BrandThree = ({ brandStyle }) => {
  const imageStyles = {
    filter: "grayscale(100%)", // Apply grayscale filter by default
    maxWidth: "90%",
  };

  const handleImageHover = (event) => {
    event.target.style.filter = "grayscale(0%)"; // Remove grayscale filter on hover
    event.target.style.maxWidth = "95%";
    event.target.style.transition = "maxWidth ease-in-out 500s linear";
  };

  const handleImageLeave = (event) => {
    event.target.style.filter = "grayscale(100%)"; // Apply grayscale filter when leaving hover
    event.target.style.maxWidth = "90%";
  };
  return (
    <ul className={`brand-list ${brandStyle}`}>
      {BrandList.map((data, index) => (
        <li key={index}>
          <a href="#">
            <img
              src={`${data.image}`}
              alt="Brand Image"
              style={imageStyles}
              onMouseOver={handleImageHover}
              onMouseLeave={handleImageLeave}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BrandThree;
