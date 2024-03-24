import React, { useEffect } from "react";
import "../css/allitems.css";
import { useAppContext } from "../context/appContext";
import { useHistory } from "react-router-dom";

const AllItems = () => {
  const { allonResult, eventList,setResult } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    allonResult();
  }, []);

  return (
    <div className="ellamellam">
      <p className="rhd">All Results</p>
      <div className="shoo"></div>
      <div className="grid-container">
      {eventList.map((event,key) => (
        <div onClick={() => {
          setResult(event);
            history.push("/result");
}} key={key}>
          <center>
            <div className="grid-item">
              <p>{event}</p> {/* Assuming event has a 'name' property */}
            </div>
          </center>
          <br /><br />
        </div>
      ))}
      </div>
    </div>
  );
};

export default AllItems;
