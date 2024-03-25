import React, { useEffect } from "react";
import "../css/allitems.css";
import { useAppContext } from "../context/appContext";
import { useHistory } from "react-router-dom";

const AllItems = () => {
  const { allResult, eventList, setResult } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    allResult("onresults");
    console.log(eventList);
  }, []);

  return (
    <div className="ellamellam">
      <p className="rhd">All Results</p>
      <div className="shoo"></div>
      <p className="rhd">ON - Stage Results</p>
      <button 
        onClick={() => {
          history.push("/offstage");
        }}
      >
        Looking for OFF - Stage results ? CLICK HERE
      </button>
      <div className="grid-container">
        {eventList.map((event, key) => (
          <div
            onClick={() => {
              setResult("onresults", event);
              history.push("/result");
            }}
            key={key}
          >
            <center>
              <div className="grid-item">
                <p>{event}</p> {/* Assuming event has a 'name' property */}
              </div>
            </center>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
