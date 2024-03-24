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
      <p className="rhd">Contacts</p>
      <div className="shoo"></div>
      <div className="sambhavamsh">
        <p><b>Joseph Martin</b> - +91 75608 38960</p>
        <p><b>Sephan Paul Jophy</b> - +91 95628 56902</p>
        <p><b>Antony Joseph (Staff)</b> - +91 81380 73048</p>
        <p><b>Alan Jose Santo (Web)</b> - +91 80863 50450</p>
        </div>
      </div>
      </IonContent>
    
  );
}

export default Home;
