import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Destinations from './components/Destinations';
import Features from './components/Features';
import TravelPlan from './components/TravelPlan'
import { createContext } from 'react';
import { useState } from 'react';
import Choose from './components/Choose';
import Contact from './components/Contact';


let dataContext = createContext()

function App() {

  const updateScroll = (value) => {
    setOffset(value)
  }

  const[selected,setSelected] = useState([])

  const[offSet,setOffset] = useState(0)
  return (
    <div className="App">
      <dataContext.Provider value={{selectedData:{selected,setSelected},offSetData:{offSet,updateScroll}}}>
    <Header/>
    <Banner/>
    <Destinations/>
    <Features/>
    <TravelPlan/>
    <Choose/>
    <Contact/>
    </dataContext.Provider>
    </div>
  );
}

export  {App,dataContext};
