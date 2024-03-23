import React, { useState, useEffect } from 'react';
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./tophouses.css";

function TopHouses({ docId }) {

    const [points, setPoints] = useState(null);

    useEffect(() => {
        const getPoints = async () => {
            const docRef = doc(db, "homepg", docId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setPoints({id: docSnap.id, ...docSnap.data()});
            } else {
                console.log("No such document!");
            }
        };
        if (docId) {
            getPoints();
        }
    }, [docId]);

  return (
    <div>
        {points && (
            <div className="topall">
        <div className="teamup">
        <div className="teamind">
          <div className="tyellow"></div>
          <div className="teamp">
        <p>Team Yellow</p>
        <h3>{points.yellow} pt</h3></div></div>

        <div className="teamind">
          <div className="tgreen"></div>
          <div className="teamp">
        <p>Team Green</p>
        <h3>{points.green} pt</h3></div></div>

      </div>
      <div className="teamdown">
      <div className="teamind">
          <div className="tblue"></div>
          <div className="teamp">
        <p>Team Blue</p>
        <h3>{points.blue} pt</h3></div></div>

        <div className="teamind">
          <div className="tred"></div>
          <div className="teamp">
        <p>Team Red</p>
        <h3>{points.red} pt</h3></div></div>

      </div></div>
        )}
    </div>
  )
}

export default TopHouses;