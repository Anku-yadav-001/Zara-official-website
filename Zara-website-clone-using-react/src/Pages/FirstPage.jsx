import React, { useEffect, useState } from 'react';
import "../Styling/FirstPage.css"
import NewPage from "../Pages/NewPage"

function VerticalSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const interval = setInterval(nextSlide,3000);
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
    
         <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-new/subhome-xmedia-09-3//w/1923/IMAGE-landscape-fill-562e4cc7-7c05-45fb-99ad-58730d80dd2d-default_0.jpg?ts=1709378175316" alt="Slide 1" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-collection/subhome-xmedia-09-3//w/1923/IMAGE-landscape-fill-867eefad-386e-4097-acd2-68f66a2348b7-default_0.jpg?ts=1709377968225" alt="Slide 2" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-denim/subhome-xmedia-09//w/1923/IMAGE-landscape-default-fill-f70a9467-33ed-4a0e-ac0d-e4f0ebd66c20-default_0.jpg?ts=1709382763747" alt="Slide 3" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-jackets/subhome-xmedia-09//w/1923/IMAGE-landscape-fill-d4a646af-9c1d-4491-9777-82a3e0d3677e-default_0.jpg?ts=1709378834738" alt="Slide 4" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-join-life/subhome-xmedia-08//w/1923/IMAGE-landscape-default-fill-448ca1e2-eb34-4a8e-8a83-635531c66fc0-default_0.jpg?ts=1708507401221" alt="Slide 5" />
         <NewPage/>
      </div>
    </div>
   
   
    </>
  );
}

export default VerticalSlider;
