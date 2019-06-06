import React from 'react';

const ButtonSlide = ({ url, text }) => {
    // const styles = {
    //   backgroundImage: `url(${url})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center'
    // };
  
    return (
      <a className="button-slide" href="{url}"> {text} </a>
    );
  }
export default ButtonSlide;