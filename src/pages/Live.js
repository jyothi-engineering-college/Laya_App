import React from 'react'

const Live = () => {
  return (
    <div>
      <h1>Stage Details</h1>
      <div className="shooresult"></div>
      <img src={require("../img/live.png")} alt="" />

      <p>Stage 1</p>
      <h1>Oppana</h1>
      <span>Participants : 20</span>
      <span>Remaining : 05</span>
      <span>ETC : 15 mins</span>
    </div>
  );
}

export default Live