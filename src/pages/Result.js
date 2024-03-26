import React, { useEffect } from "react";
import "../css/Result.css";
import { useAppContext } from "../context/appContext";

const Result = () => {
  const { eventResult, resultName } = useAppContext();
  

  return (
    <div>
      <h1 className="resultheader">Result</h1>
      <div className="shooresult"></div>

      <center>
        {" "}
        <div className="imgevent"></div>
      </center>
      <div className="eventname">{resultName}</div>
      {eventResult["name-1"] == "dummy" ? (
        <h1 className="resultd">Result to be declared</h1>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>House</th>
            <th>Position</th>
          </tr>
          <td colspan="4">
            <hr className="headerhr" width="90%" />
          </td>

          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>{eventResult["name-1"]}</td>
            <td>{eventResult["class-1"]}</td>
            <td>{eventResult["house-1"]}</td>
            <td className="place1">First</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>{eventResult["name-2"]}</td>
            <td>{eventResult["class-2"]}</td>
            <td>{eventResult["house-2"]}</td>
            <td className="place1">Second</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>{eventResult["name-3"]}</td>
            <td>{eventResult["class-3"]}</td>
            <td>{eventResult["house-3"]}</td>
            <td className="place1">Third</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
        </table>
      )}
      <center></center>
      {/* </div> */}
    </div>
  );
};


export default Result;
