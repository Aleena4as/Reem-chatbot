import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tween } from "react-gsap";
import Button from "../Button/Button";

/**
 * Carousel For Direction
 *
 */

export default (props) => {
   const [clientXonMouseDown, setclientXonMouseDown] = useState(null);
   const [clientYonMouseDown, setclientYonMouseDown] = useState(null);
   const [isDisabled, setisDisabled] = useState(false);
   const [activeLink, setactiveLink] = useState(null);
   let slider;

   /**
    * Storing the Mouse Position on MousePress
    *
    * @param {*} event
    */
   const handleOnMouseDown = (event) => {
      setclientXonMouseDown(event.clientX);
      setclientYonMouseDown(event.clientY);

      event.preventDefault(); // stops weird link dragging effect
   };

   /**
    * Checking if the Mouse is Dragged or Clicked
    *
    * If Dragged then the click event will not be triggered
    *
    * @param {*} event
    * @param {*} payload
    * @param {*} title
    *
    */
   const handleOnClick = (event, payload, title) => {
      event.stopPropagation();
      // if (clientXonMouseDown !== event.clientX || clientYonMouseDown !== event.clientY) {
      //    event.preventDefault();
      // } else {
         if (isDisabled) {
            event.stopPropagation();
         } else {
            props.sendQuickMessage(payload, title);
            setisDisabled(true);
            setactiveLink(title);
         }
      // }
   };

   const SlickNextClick = () => {
      slider.slickNext();
   };

   const SlickPrevClick = () => {
      slider.slickPrev();
   };

   const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      edgeFriction: 0,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      touchMove: true,
   };

   return (
      <Tween from={{ x: "30px", opacity: 0, delay: 0.5 }}>
         <div className="carousel-container">
            <Slider ref={(c) => (slider = c)} edgeFriction={0} {...settings}>
               {props.chat.data.map((data, index) => (
                  <div
                     className={`figure ${props.chat.data.length === 1 ? "newClass" : ""} ${
                        isDisabled && data.label !== activeLink ? "disabled-button" : ""
                     }`}
                     key={index}
                     // onMouseDown={handleOnMouseDown}
                     onClick={(event) => handleOnClick(event, data.buttons[0].payload, data.label)}
                  >
                     <img className="image" src={require(`../../public/images/${data.image}.png`)} alt="" />
                     <section className="details">
                        <h1>{data.label}</h1>
                     </section>
                  </div>
               ))}
            </Slider>
            <div className="button-section">
               <Button onClick={SlickPrevClick} disabled={isDisabled}>
                  <img src={require("../../public/images/left-active.svg")} alt="" />
               </Button>
               <Button onClick={SlickNextClick} disabled={isDisabled}>
                  <img src={require("../../public/images/right-active.svg")} id="right-arrow" alt="" />
               </Button>
            </div>
         </div>
      </Tween>
   );
};
