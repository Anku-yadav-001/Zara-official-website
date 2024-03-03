import React, { useEffect, useState } from 'react';
import "../Styling/FirstPage.css"
import NewPage from "../Pages/NewPage"
import Login from "../NavItems/Login";
import Help from "../NavItems/Help";

function VerticalSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const interval = setInterval(nextSlide,1000);
    return () => clearInterval(interval);
    function nextSlide() {
      setSlideIndex(prevIndex => (prevIndex + 1) % slider.children.length);
    }
  }, []); 

  useEffect(() => {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateY(-${slideIndex * 100}vh)`;
  }, [slideIndex]);

 
  return (
    <>
   
    <div className="slider-container">
      <div className="slider">
    
      <img src="https://w0.peakpx.com/wallpaper/752/4/HD-wallpaper-butterfly-flowers-insect-flying.jpg" alt="Slide 1" />
        <img src="https://th.bing.com/th/id/OIP.T4mU2xwVUfrEfGrvhlNVOgAAAA?pid=ImgDet&w=157&h=209&c=7&dpr=1.3" alt="Slide 2" />
        <img src="https://th.bing.com/th/id/OIP.BEbNiAmZhxKwO3TAklIvRgHaLa?pid=ImgDet&w=157&h=242&c=7&dpr=1.3" alt="Slide 3" />
       
        <NewPage/>
      </div>
    </div>
   
   
    </>
  );
}

export default VerticalSlider;
