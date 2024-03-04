import React, { useEffect, useState } from 'react';
import "../Styling/FirstPage.css"
import NewPage from "../Pages/NewPage"

function Secondpage(){
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
    
      <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-new/subhome-xmedia-09-2//w/1923/IMAGE-landscape-fill-135ea7e7-e048-4885-868b-c95f45dbdc3d-default_0.jpg?ts=1709284999046" alt="Slide 1" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-trousers/subhome-xmedia-09//w/1923/IMAGE-landscape-fill-f65b9a63-d4e9-4192-b74b-4354ceeedb52-default_0.jpg?ts=1709285097745" alt="Slide 2" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-bags/subhome-xmedia-09-2//w/1923/IMAGE-landscape-fill-712e5cd0-7234-49b0-b592-ca4cba2de2c0-default_0.jpg?ts=1709223456267" alt="Slide 3" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-accesorios/subhome-xmedia-09//w/1923/IMAGE-landscape-fill-90d33814-5ece-4ce9-a56a-6eca90b4de29-default_0.jpg?ts=1709223745930" alt="Slide 4" />
        <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-join-life/subhome-xmedia-08//w/1923/IMAGE-landscape-default-fill-448ca1e2-eb34-4a8e-8a83-635531c66fc0-default_0.jpg?ts=1708507401221" alt="Slide 5" />
         <NewPage/>
      </div>
    </div>
    </>
}
export default Secondpage