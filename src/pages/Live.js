import React from "react";
import dum from "../img/dumms.gif";
import "../css/Live.css";
const Live = () => {
  return (
    <div className="live">
      <h1 className="stageheader">Live Now</h1>
      <div className="shooresult"></div>
      <div className="liveone">
        <img className="bgimagelive" src={require("../img/live.png")} alt="" />

        <div className="stagedetails">
          <img className="liveimg" src={dum} alt="lv"></img>
          <p>Stage 1</p>
        </div>
        <h1 className="proname">Oppana</h1>
        <div className="programdetails">
          <span>Participants : 20</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>ETC : 15 mins</span>
        </div>
      </div>
      <div className="liveone">
        <img className="bgimagelive" src={require("../img/live.png")} alt="" />

        <div className="stagedetails">
          <img className="liveimg" src={dum} alt="lv"></img>
          <p>Stage 1</p>
        </div>
        <h1 className="proname">Oppana</h1>
        <div className="programdetails">
          <span>Participants : 20</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>ETC : 15 mins</span>
        </div>
      </div>{" "}
      <div className="liveone">
        <img className="bgimagelive" src={require("../img/live.png")} alt="" />

        <div className="stagedetails">
          <img className="liveimg" src={dum} alt="lv"></img>
          <p>Stage 1</p>
        </div>
        <h1 className="proname">Oppana</h1>
        <div className="programdetails">
          <span>Participants : 20</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>ETC : 15 mins</span>
        </div>
      </div>{" "}
      <div className="liveone">
        <img className="bgimagelive" src={require("../img/live.png")} alt="" />

        <div className="stagedetails">
          <img className="liveimg" src={dum} alt="lv"></img>
          <p>Stage 1</p>
        </div>
        <h1 className="proname">Oppana</h1>
        <div className="programdetails">
          <span>Participants : 20</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>ETC : 15 mins</span>
        </div>
      </div>
    </div>
  );
};

export default Live;
