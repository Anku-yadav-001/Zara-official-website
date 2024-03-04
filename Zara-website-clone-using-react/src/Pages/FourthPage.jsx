
import React, { useEffect, useState } from 'react';
import "../Styling/FirstPage.css"
import NewPage from "../Pages/NewPage"

function FourthPage(){
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
    
         <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-beauty-north-new/subhome-xmedia-03//w/1923/IMAGE-landscape-default-fill-3bc12995-dc43-4868-a785-8004a1b8dac0-default_0.jpg?ts=1705593799953" alt="Slide 1" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-beauty-tools/subhome-xmedia-03//w/1923/IMAGE-landscape-fill-09685424-fd3a-4f4c-8d8a-dc6befc6a263-default_0.jpg?ts=1705598573026" alt="Slide 2" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-beauty-north-lips/subhome-xmedia-03//w/1923/IMAGE-landscape-default-fill-6cda6160-7f31-42bd-8b98-49f7703ecacf-default_0.jpg?ts=1705595411617" alt="Slide 3" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-beauty-face/subhome-xmedia-03//w/1923/IMAGE-landscape-fill-7ccb0d9b-6977-47ff-9aef-3cc528be2a3a-default_0.jpg?ts=1705596798489" alt="Slide 4" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-join-life/subhome-xmedia-08//w/1923/IMAGE-landscape-default-fill-448ca1e2-eb34-4a8e-8a83-635531c66fc0-default_0.jpg?ts=1708507401221" alt="Slide 5" />
         <NewPage/>
      </div>
    </div>
    </>
}
export default FourthPage