import React from 'react'
import "../css/404.css"
const Maintain = () => {
  return (
    <div class="maintenance">
      <div class="maintenance_contain">
        <img
          src="https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-vector.png"
          alt="maintenance"
        />
        <center>
          <h1 class="pp-infobox-title-prefix">WE ARE COMING SOON !</h1>
        </center>
        <center>
          <div class="pp-infobox-title-wrapper">
            <h2 class="pp-infobox-title">
              The website under maintenance for todays data updation!
            </h2>
          </div>
        </center>
        <div class="pp-infobox-description">
          <center>
            {" "}
            <h3>Come back at 10 30 to see the updations :)</h3>{" "}
          </center>
        </div>
      </div>
    </div>
  );
}

export default Maintain