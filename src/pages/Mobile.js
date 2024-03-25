import React from "react";
import "../css/404.css";
const Mobile = () => {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          srcSet="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span> ! USE PHONE</span>

   
        <p class="p-a">
          {" "}
          LOOKS LIKE YOU ARE USING A DESKTOP. PLEASE USE A MOBILE DEVICE FOR BETTER EXPERIENCE
        </p>

        <a href="/" class="back">
          Back to previous page
        </a>
      </div>
    </div>
  );
};

export default Mobile;
