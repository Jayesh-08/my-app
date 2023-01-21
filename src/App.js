import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'
      showAlert("DarkMode has been set", "success")
      document.title = "TextUtils (DarkMode)"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert("LightMode has been set", "success")
      document.title = "TextUtils (LightMode)"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" sec="Home" thi="About" mode={mode} toggle={toggleMode} />
      <div className="container my-3">
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" placeHolder="Enter text here" mode={mode} /> 
      <About mode={mode} toggle={toggleMode} />
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/about" element={<About mode = {mode} toggle={toggleMode}/>}/>
            <Route exact path="/*" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" placeHolder="Enter text here" mode={mode} />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}
export default App;