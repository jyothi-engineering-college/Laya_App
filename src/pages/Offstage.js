import React, { useEffect } from "react";
import "../css/allitems.css";
import { useAppContext } from "../context/appContext";
import { useHistory } from "react-router-dom";

const Offstage = () => {
  const { allResult, eventList, setResult } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    allResult("offresults");

  }, []);

  return (
    <div className="ellamellam">
      <p className="rhd">All Results</p>
      <div className="shoo"></div>
      <p className="rhd">ON - Stage Results</p>
      <button
        onClick={() => { 
          history.push("/allresults");
           allResult("onresults");
        }}
      >
        Looking for ON - Stage results ? CLICK HERE
      </button>
      <div className="grid-container">
        {eventList.map((event, key) => (
          <div
            onClick={() => {
              setResult("offresults", event);
              history.push("/result");
            }}
            key={key}
          >
            <center>
              <div className="grid-item">
                <p>{event}</p> 
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

export default Offstage;
 