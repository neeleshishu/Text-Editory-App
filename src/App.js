import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Textzone from "./component/Textzone";
import Footer from './component/Footor';
import Alert from './component/Alert';
import About from './component/About';
import { useState } from 'react';
import {BrowserRouter as Router,
   Switch, Route, Link, Routes} from "react-router-dom"



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
  
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark Mode has been Enabled","success")
      document.title = "Text-Edit DarkMode App";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been Enabled","success")
      document.title = "Text-Edit LightMode App";
    }
  };

  const [alert, setalert] = useState(null);

  const showalert = (massage, type) => {
    setalert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="coders" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      <Routes>
          <Route path="/about"
           element= {<About mode={mode}/>}>
          </Route>
          <Route path="/"
          element={<Textzone heading="Enter Text Here" mode={mode} />}>
          </Route>
        </Routes>
      </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
