import React from "react";
import "../css/Result.css";
const Result = () => {
  return (
    <div>
          <h1 className="resultheader">Result</h1>
          <div className="shoo"></div>

      <center>
        {" "}
        <div className="imgevent"></div>
      </center>
      <div className="eventname">Oppana</div>
      {/* <div className="table-responsive"> */}
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
            <td>Smith</td>
            <td>Logistics</td>
            <td>South</td>
            <td className="place1">East</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>David</td>
            <td>Transport</td>
            <td>East</td>
            <td className="place2">East</td>
          </tr>
          <td colspan="4">
            <hr className="rowshr" width="90%" />
          </td>
          <tr>
            <td>Davisd</td>
            <td>Transport</td>
            <td>East</td>
            <td className="place3">East</td>
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
