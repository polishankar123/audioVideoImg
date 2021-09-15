import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import VideoFile from './changingweather.mp4'
import Reader from './Components/Reader';
export const userContext=React.createContext();
const App = () => {
  
  return(
    <div>
      <h1>
        Weather Report
      </h1>
      <userContext.Provider value={"polishankar"}>
        <Reader />
        </userContext.Provider>

      <Header />
      <video width="250" height="250" controls>
        <source src={VideoFile} type="video/mp4" />
      </video>
      <Footer />
    </div>
  )
}

export default App;
