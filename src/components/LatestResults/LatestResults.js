import React, { useState, useEffect } from 'react';
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./latestresults.css";
import { Link } from "react-router-dom";


function LatestResults({ docId }) {
    const [results, setResults] = useState(null);

    useEffect(() => {
        const getResults = async () => {
            const docRef = doc(db, "homepg", docId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setResults({id: docSnap.id, ...docSnap.data()});
            } else {
                console.log("No such document!");
            }
        };
        if (docId) {
            getResults();
        }
    }, [docId]);

  return (
    <div>
      {results && (
        <div className="rsltl">
          <div className="frame1">

            <div className="eachf">
              <p className="fitem1">{results.item1}</p>
            </div>

            <div className="eachf">
              <p className="fitem1">{results.item2}</p>
            </div>

            <div className="eachf">
              <p className="fitem1">{results.item3}</p>
            </div>

            <div className="eachf">
              <p className="fitem1">{results.item4}</p>
            </div>

            <div className="eachf">
            <Link className='linkey' to="/allresults">Get More</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LatestResults;