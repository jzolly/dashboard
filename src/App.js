import logo from './logo.svg';
import './App.css';
import SideBar from './component/SideBar';
import TopData from './component/TopData';
import WebVisitors from './component/WebVisitors';
import "./styles.css"

function App() {
  return (
    <div className="fullContainer">
      <SideBar />
      <div className="dataMain">
        <div className="top">
          <TopData whichTop="Reviews" data="1,281"/>
          <TopData whichTop="Average Rating" data="4.6"/>
          <TopData whichTop="Sentiment Analysis" data="960"/>
        </div>
        <WebVisitors /> 
      </div>
    </div>
  );
}

export default App;
