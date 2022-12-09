import React from 'react';

const Slider = () => {
    return (
        <div>
         <div className="carousel w-3/4 mx-auto rounded-2xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img alt=''  src="https://assets.heartfoundation.org.nz/images/all-shared-sections/blogs/healthy-food-selection.png?mtime=1669000866" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img alt='' src="https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img alt=''  src="https://www.essentialmealdelivery.com/wp-content/uploads/elementor/thumbs/fun-facts-about-healthy-eating-ozpul9g4swampbq4pikd2ljex2vgod9pdqzephoya0.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img alt=''  src="https://www.oneeducation.org.uk/wp-content/uploads/2021/01/Healthy-Foods-to-Eat-Everyday.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;