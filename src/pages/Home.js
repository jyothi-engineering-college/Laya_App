import "../css/Home.css";
import logo from "../img/header_jy.png";
import liveey from "../img/livv.png";
import dum from "../img/dumms.gif";
import eclipse from"../img/ellipse-1.svg";

function Home() {
  return (
    <div className="App">

      <div className="header">
        <p>Laya</p>
        <img src={logo} alt="jylogo" className="logog"></img>
      </div>
      <center><a href="https://www.google.com"><div className="livee">
        <img src={liveey} alt="bggs"></img>
        <div className="lvp">
          <p className="ln"><img className="dumy" src={dum} alt="lv"></img>Live Now</p>
          <p className="item1">Kelikott</p>
        </div>
      </div></a></center>
      <p className="rhd">Latest Results</p>
      <div className="shoo"></div>
      <div className="rsltl">
        <div className="frame1">

          <div className="eachf">
            <p className="fitem1">ClassicalMusic1</p>
          </div>
          
          <div className="eachf">
            <p className="fitem1">Oppana</p>
          </div>

          <div className="eachf">
            <p className="fitem1">Group Dance</p>
          </div>

          <div className="eachf">
            <p className="fitem1">Light Music</p>
          </div>

          <div className="eachf">
            <p className="fitem1">GetMore</p>
          </div>
</div>
        </div>
        <p className="rhd">Upcoming Events</p>
      <div className="shoo"></div>
      </div>
    
  );
}

export default Home;
