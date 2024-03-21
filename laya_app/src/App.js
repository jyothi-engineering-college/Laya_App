
import './App.css';
import logo from './img/header_jy.png'; 
import liveey from './img/livv.png';
function App() {
  return (
    <div className="App">
      <div className="header"><p>Laya</p>
      <img src={logo} alt='jylogo' className='logog'></img>
      </div>
      <div className="livee">
        <img src={liveey} alt='bggs'></img>
        <div className="lvp"><iframe src="https://lottie.host/embed/da624969-2143-4bb0-9084-fe63affd0c5b/1F4mejgP7z.json"></iframe><p className='ln'>Live Now</p>
      <p className='item1'>Kathakali</p></div>
        </div>
    </div>
  );
}

export default App;
