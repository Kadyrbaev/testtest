import React from 'react'
import Slider from 'react-slick';
import { styled } from 'styled-components';

const ImageSlider = ({images}) => {
    console.log(2222);
    console.log(images);
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
       
      };
    
  return (
    // <div style={{border: "2px solid red"}}>
    //   <Slider {...settings}>
    //     <div style={{border: "2px solid red"}}>
    //         {images.map((item) => (
    //             <img src={item}  alt={item} />
    //         ))}
    //     </div>

    //   </Slider>
    // </div>
    <Test>
    <div className="tag">
          <h1>Image Gallery</h1>
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item}>
              <img src={item}  alt={item} />
            </div>
          ))}
        </Slider>
      </div>
          </Test>

  )
}

export default ImageSlider

const Test = styled.div`
& .tag {
    text-align: center;
    border: 10px solid red;
}
  
.slick-slide img {
    margin: auto;
    width: 50%;
    height: 50%;
    border: 10px solid yellow;
}
.imgslider{
    border: 20px solid;
}


`