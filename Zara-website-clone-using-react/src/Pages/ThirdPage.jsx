import React, { useEffect, useState } from 'react';
import "../Styling/FirstPage.css"
import NewPage from "../Pages/NewPage"

function ThirdPage(){
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

    return <>
     <div className="slider-container">
      <div className="slider">
    
         <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-true-neutrals/subhome-xmedia-08//w/1923/IMAGE-landscape-fill-f0c9ed23-b3ff-44d8-baea-35f68cf50b2b-default_0.jpg?ts=1708675528776" alt="Slide 1" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-babygirl/subhome-xmedia-08//w/1923/IMAGE-landscape-default-fill-d55e6a7d-2adf-41fa-a2a7-a75d3aa73810-default_0.jpg?ts=1708674688839" alt="Slide 2" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-girl/subhome-xmedia-09//w/1923/IMAGE-landscape-default-fill-5475fa8f-555e-4ec7-bd46-ee29770f62ed-default_0.jpg?ts=1709218443926" alt="Slide 3" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-babyboy/subhome-xmedia-08//w/1923/IMAGE-landscape-default-fill-cb411d26-25e5-48ec-8ea1-19b9cdf37824-default_0.jpg?ts=1708674772320" alt="Slide 4" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-boy/subhome-xmedia-09//w/1923/IMAGE-landscape-default-fill-5f069384-40df-4120-b03f-d2da50d12c4e-default_0.jpg?ts=1709219189946" alt="Slide 5" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-mini-newborn/subhome-xmedia-09//w/1923/IMAGE-landscape-default-fill-634f1a7f-4bdd-4e3c-8a79-709e4fa62336-default_0.jpg?ts=1709220463466" alt="Slide 6" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-mini-baby/subhome-xmedia-09//w/1923/IMAGE-landscape-default-fill-d5eb2df0-d0af-4095-a44f-379c7fac55e6-default_0.jpg?ts=1709219958301" alt="Slide 7" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-shoes-bags/subhome-xmedia-09//w/1923/IMAGE-landscape-default-fill-a56e6609-71af-4813-aebf-bf153a4bca5e-default_0.jpg?ts=1709222860420" alt="Slide 8" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-join-life/subhome-xmedia-08//w/1923/IMAGE-landscape-default-fill-448ca1e2-eb34-4a8e-8a83-635531c66fc0-default_0.jpg?ts=1708507401221" alt="Slide 9" />
         <NewPage/>
      </div>
    </div>
    </>
}
export default ThirdPage