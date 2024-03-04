import "../Styling/FirstPage.css"
function NewPage(){
    return <>
     <div className="newpage-main-container">
     <p className="newpage-ptag">JOIN OUR NEWSLETTER</p>
      <div className="newpage-main-container1">
        <div className="social-media-networks">
            <div>INSTAGRAM</div>
            <div>FACEBOOK</div>
            <div>X</div>
            <div>PINTEREST</div>
            <div>YOUTUBE</div>
            <div>SPOTIFY</div>
        </div>
      </div>
     <div className="company-address">
       <p>
        NAME AND ADDRESS OF THE MANUFACTURER:<br/>
        INDUSTRIA DE DISENO TEXTIL, S.A. (INDITEX, S.A.)<br/>
        AVENDIA DE LA DIPUTACION, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUNA), SPAIN
       </p>
     </div>
     </div>
    </>
}
export default NewPage