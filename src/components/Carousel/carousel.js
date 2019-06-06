import React, { Component } from "react";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import TextSlide from "./TextSlide";
import ButtonSlide from "./ButtonSlide";

import "./carousel.css";

const imgUrls = [
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/DEKSTOP%20RHD.png.ximg.full.hero.png",
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/800205_NISS_MOTABILITY_HOMEPG%20CAROUSEL%20BNR_3000x1300.jpg.ximg.c4.hero.jpg",
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/001258_NISS_HOMEPG%20CAROUSEL%20BNR_3000x1300%20-%20MICRA%20N-SPORT%20-%20v2.jpg.ximg.full.hero.jpg",
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/Nissan_Sweep_The_Nation_3000x1300_Desktop.jpg.ximg.full.hero.jpg",
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/800605_NISS_DCO_HOMEPG%20CAROUSEL%20BNR_3000x1300%20-%20NAVARA%20N-GUARD%20%2B%20NIM.jpg.ximg.full.hero.jpg"];

const textVal = [
  "Nissan Leaf",
  "Tough is the new stylish",
  "tweet for a chance to win tickets",
  "The future of Nissan intelligent mobility",
  "NISSAN MOTABILITY"
];

const buttonText= [
  "Discover more",
  "Terms and conditions",
  "Discover more",
  "Terms and conditions",
  "Discover more"
];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      currentTextIndex: 0,
      currentButtonIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const TextlastIndex = textVal.length - 1; 
    const ButtonlastIndex = buttonText.length - 1; 
    const { currentImageIndex, currentTextIndex, currentButtonIndex  } = this.state;
    const shouldResetIndex = { currentImageIndex, currentTextIndex, currentButtonIndex} === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    const textIndex = shouldResetIndex ? TextlastIndex : currentTextIndex - 1;
    const buttonIndex = shouldResetIndex ? ButtonlastIndex : currentButtonIndex - 1;
    this.setState({
      currentImageIndex: index,
      currentTextIndex: textIndex,
      currentButtonIndex: buttonIndex
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const TextlastIndex = textVal.length - 1; 
    const ButtonlastIndex = buttonText.length - 1; 

    const { currentImageIndex, currentTextIndex, currentButtonIndex } = this.state;
    const shouldResetIndex = { currentImageIndex, currentTextIndex, currentButtonIndex } === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    const textIndex = shouldResetIndex ? TextlastIndex : currentTextIndex + 1;
    const buttonIndex = shouldResetIndex ? ButtonlastIndex : currentButtonIndex - 1;

    this.setState({
      currentImageIndex: index,
      currentTextIndex: textIndex,
      currentButtonIndex: buttonIndex
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <div className="wrapper">
          <TextSlide text={textVal[this.state.currentTextIndex]}/>
          <ButtonSlide text={buttonText[this.state.currentTextIndex]} url="#" />
        </div>
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}
export default Carousel;
