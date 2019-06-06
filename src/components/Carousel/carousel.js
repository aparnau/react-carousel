import React, { Component } from "react";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import Text from "./TextSlide";

import "./carousel.css";

const imgUrls = [
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/DEKSTOP%20RHD.png.ximg.full.hero.png",
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/800205_NISS_MOTABILITY_HOMEPG%20CAROUSEL%20BNR_3000x1300.jpg.ximg.c4.hero.jpg",
  "https://www-europe.nissan-cdn.net/content/dam/Nissan/gb/homepage/001258_NISS_HOMEPG%20CAROUSEL%20BNR_3000x1300%20-%20MICRA%20N-SPORT%20-%20v2.jpg.ximg.full.hero.jpg"];
  

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
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
        <Text />
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
