import "../css/Home.css";
import logo from "../img/header_jy.png";

import 'remixicon/fonts/remixicon.css';


import { IonContent } from "@ionic/react";
import Header from "../components/header/Header";
import LatestResults from "../components/LatestResults/LatestResults";

function Home() {
  return (
        <IonContent>
    <div className="App">

      <div className="header"> 
        <p>Laya</p>
        <img src={logo} alt="jylogo" className="logog"></img>
      </div>

      <Header docId="header"></Header>

      <p className="rhd">Latest Results</p>
      <div className="shoo"></div>
     
      <LatestResults docId="latestres"></LatestResults>

        <p className="rhd">Upcoming Events</p>
      <div className="shoo"></div>
      <div className="ucontainer">
      <div className="upev">

        <div className="upsf">
          <div className="upsn">
          <center><p className="streg">Stage</p>
            <p className="stbold">2</p></center>
          </div>
          <div className="upsd">
            <h2>Light Music</h2>
            <p><i class="ri-time-line" width="16px" height="16px"></i> 09.00 am onwards</p>
            <p><i class="ri-team-line"></i> 60 people participating</p>
          </div>
        </div>

        <div className="upsf">
          <div className="upsn">
          <center><p className="streg">Stage</p>
            <p className="stbold">2</p></center>
          </div>
          <div className="upsd">
            <h2>Light Music</h2>
            <p><i class="ri-time-line" width="16px" height="16px"></i> 09.00 am onwards</p>
            <p><i class="ri-team-line"></i> 60 people participating</p>
          </div>
        </div>

        <div className="upsf">
          <div className="upsn">
          <center><p className="streg">Stage</p>
            <p className="stbold">2</p></center>
          </div>
          <div className="upsd">
            <h2>Light Music</h2>
            <p><i class="ri-time-line" width="16px" height="16px"></i> 09.00 am onwards</p>
            <p><i class="ri-team-line"></i> 60 people participating</p>
          </div>
        </div>


      </div></div>
      
      <p className="rhd">Top Houses</p>
      <div className="shoo"></div>
      <div className="teamup">
        <div className="teamind">
          <div className="tyellow"></div>
          <div className="teamp">
        <p>Team Yellow</p>
        <h3>256 pt</h3></div></div>

        <div className="teamind">
          <div className="tgreen"></div>
          <div className="teamp">
        <p>Team Green</p>
        <h3>256 pt</h3></div></div>

      </div>
      <div className="teamdown">
      <div className="teamind">
          <div className="tblue"></div>
          <div className="teamp">
        <p>Team Blue</p>
        <h3>256 pt</h3></div></div>

        <div className="teamind">
          <div className="tred"></div>
          <div className="teamp">
        <p>Team Red</p>
        <h3>256 pt</h3></div></div>

      </div>
      </div>
      </IonContent>
    
  );
}

export default Home;
