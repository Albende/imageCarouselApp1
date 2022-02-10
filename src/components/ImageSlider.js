import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import PostCard from "./PostCard";
import { Slide, TextField } from "@material-ui/core";

const ImageSlider = ({ slides }) => {
  const [slideData, setSlideData] = useState([]);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(3);
  const [filterByLike, setFilterByLike] = useState(0);

  //   useEffect(() => {
  // let filteredSlides = slides.filter((slide) => {
  //   return slide.likeCount > filterByLike;
  // });

  //     setSlideData(filteredSlides.slice(0, 3));
  //   }, [filterByLike]);

  useEffect(() => {
    setSlideData(slides.slice(0, 3));
  }, [slides]);

  const length = slides.length;

  const nextSlide = () => {
    if (last == slides.length - 1) {
      setSlideData(slides.slice(0, 3));
      setFirst(0);
      setLast(3);
    } else {
      setSlideData(slides.slice(first + 1, last + 1));
      setFirst(first + 1);
      setLast(last + 1);
    }
  };

  const prevSlide = () => {
    if (first == 0) {
      setSlideData(slides.slice(slides.length - 4, slides.length - 1));

      setFirst(slides.length - 4);
      setLast(slides.length - 1);
    } else {
      setSlideData(slides.slice(first - 1, last - 1));
      setFirst(first - 1);
      setLast(last - 1);
    }
  };

  //   const handleChange = (e) => {
  //     setFilterByLike(parseInt(e.target.value));
  //   };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <>
      {/* <TextField
        onChange={handleChange}
        value={filterByLike}
        id="outlined-basic"
        label="Minimum Like"
        variant="outlined"
      /> */}

      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slideData.map((slide) => {
          return <PostCard key={slide.id} slide={slide} />;
        })}
      </section>
    </>
  );
};

export default ImageSlider;
