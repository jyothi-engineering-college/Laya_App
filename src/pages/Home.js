import "../css/Home.css";
import logo from "../img/header_jy.png";

import 'remixicon/fonts/remixicon.css';


import { IonContent } from "@ionic/react";
import Header from "../components/header/Header";
import LatestResults from "../components/LatestResults/LatestResults";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import TopHouses from "../components/TopHouses/TopHouses";

function Home() {
  return (
    <IonContent>
      <div className="App">
        <div className="header">
          <img style={{borderRadius:"50%",height:"50px",marginRight:"-150px"}} src={require("../img/logo.jpg")} alt="" srcset="" />
          <p>Laya</p>
          <img src={logo} alt="jylogo" className="logog"></img>
        </div>

        <Header docId="header"></Header>

        <p className="rhd">Latest Results</p>
        <div className="shoo"></div>

        <LatestResults docId="latestres"></LatestResults>

        <p className="rhd">Upcoming Events</p>
        <div className="shoo"></div>

        <UpcomingEvents></UpcomingEvents>

        <p className="rhd">Top Houses</p>
        <div className="shoo"></div>

        <TopHouses docId="tophouse"></TopHouses>
        <div className="sthalam"></div>
      </div>
    </IonContent>
  );
}

export default Home;
