import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import dum from "../img/dumms.gif";
import "../css/Live.css";
function Live(){
  const [live, setLive] = useState([]);
    const liveCollectionRef = collection(db, "livenow");

    useEffect(() => {
      const getLive = async () => {
          const data = await getDocs(liveCollectionRef);
          setLive(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getLive();
  }, []);

  return (
    <div className="live">
      <h1 className="stageheader">Live Now</h1>
      <div className="shooresult"></div>
      {live.map((event) => (
      <center><div key={event.id} className="liveone">

        <div className="stagedetails">
          <img className="liveimg" srcSet={dum} alt="lv"></img>
          <p>Stage {event.stageno}</p>
        </div>
        <h1 className="proname">{event.itemn}</h1>
        <div className="programdetails">
          <span>Participants : {event.participants}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>ETC : {event.etc} mins</span>
        </div>
        <div className="programdetails">
          <span>Stage Manager : {event.manager}</span>
        </div>
      </div></center>
    ))}
      
   
    </div>
  );
};

export default Live;
