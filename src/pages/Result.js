import React, { useEffect } from "react";
import "../css/Result.css";
import { useAppContext } from "../context/appContext";

const Result = () => {
  const { eventResult } = useAppContext();
  useEffect(() => {
    console.log(eventResult);
  }, []);

  return (
    <div>
      <h1 className="resultheader">Result</h1>
      <div className="shooresult"></div>

      <center>
        {" "}
        <div className="imgevent"></div>
      </center>
      <div className="eventname">Oppana</div>
      <center>
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
            <td className="place1">{eventResult["position-1"]}</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>{eventResult["name-1"]}</td>
            <td>{eventResult["class-1"]}</td>
            <td>{eventResult["house-1"]}</td>
            <td className="place1">{eventResult["position-1"]}</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>{eventResult["name-1"]}</td>
            <td>{eventResult["class-1"]}</td>
            <td>{eventResult["house-1"]}</td>
            <td className="place1">{eventResult["position-1"]}</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
        </table>
      </center>
      {/* </div> */}
    </div>
  );
};

export default Result;
