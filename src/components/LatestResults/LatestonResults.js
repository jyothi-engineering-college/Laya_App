import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import "./latestresults.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { useHistory } from "react-router-dom";

function LatestonResults() {
  const [allresults, setallResults] = useState([]);
  const { setResult } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "onresults"));
        const docId = querySnapshot.docs.map((doc) => doc.id);

        const docs = querySnapshot.docs.map((doc) => doc.data());

        const alldocs = docs.map((doc, index) => {
          return {
            ...doc,
            id: docId[index],
          };
        });

        setallResults(alldocs);
        const filteredDocuments = alldocs.filter((doc) => doc.timestamp);

        filteredDocuments.sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
        setallResults(filteredDocuments);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <div className="rsltl">
        <div className="frame1">
          {allresults.map((e) => (
            <div
              onClick={() => {
                setResult("onresults", e.id);
                history.push("/result");
              }}
              className="eachf"
              key={e.id}
            >
              <p className="fitem1">{e.id}</p>
            </div>
          ))}
          <div className="eachf">
            <Link className="linkey" to="/allresults">
              Get More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestonResults;
