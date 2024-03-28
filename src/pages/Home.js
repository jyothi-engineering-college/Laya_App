import "../css/Home.css";
import logo from "../img/header_jy.png";

import { IonContent } from "@ionic/react";
import Header from "../components/header/Header";
import LatestResults from "../components/LatestResults/LatestoffResults";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import TopHouses from "../components/TopHouses/TopHouses";
import LatestonResults from "../components/LatestResults/LatestonResults";
import LatestoffResults from "../components/LatestResults/LatestoffResults";

function Home() {
  return (
    <IonContent>
      <div className="App">
        <div className="header">
          <img
            style={{
              borderRadius: "50%",
              height: "50px",
              marginRight: "-150px",
            }}
            srcSet={require("../img/logo.jpg")}
            alt=""
            src=""
          />

          <p>Laya</p>
          <img srcSet={logo} alt="jylogo" className="logog"></img>
        </div>

        <Header docId="header"></Header>

        <p className="rhd">Latest ON-STAGE&nbsp; Results</p>
        <div className="shoo"></div>

        <LatestonResults docId="latestres"></LatestonResults>
        <p className="rhd">Latest OFF-STAGE&nbsp; Results</p>
        <div className="shoo"></div>

        <LatestoffResults docId="latestres"></LatestoffResults>

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
