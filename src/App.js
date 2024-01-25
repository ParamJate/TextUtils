import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const lightMode = ()=>{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    showAlert("Light Mode Enabled", "success")
  }
  
  const darkMode =()=>{
    setMode('black')
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    showAlert("Dark Mode Enabled", "success")
  }

  const themeMode =()=>{
    if(mode==='light'){
      darkMode()
    }else{
      lightMode()
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  
  return (
    <>
    {/* <Navbar title="TextUtilities" aboutText="About us"/> */}
    <Router>
      <Navbar title="TextUtils" mode={mode} lightMode={lightMode} darkMode={darkMode} themeMode={themeMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route path="/about">
            <About mode={mode} lightMode={lightMode} darkMode={darkMode}/>
          </Route>
          <Route path="/">
            <Textform heading="Enter text below to analyize"  showAlert={showAlert} mode={mode} lightMode={lightMode} darkMode={darkMode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  
  );
}

export default App;

