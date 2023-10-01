//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";


 
function App() {
  const [mode, setMode]= useState("light");//whether dark ode enabled or not
  const [alert, setAlert]= useState(null);//alert is created as an object here

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500);
  }

  const toggleMode=()=>
  {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils - DarkMode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils - LightMode";



    }
  }
  return (
    <>
    {/* <Navbar title="TextBlogs" aboutus="AboutBlogs"/> */}
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route> */}
          {/* <Route exact path="/" element={            <Textform  showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/> */}
{/* }> */}
          {/* </Route>
      </Routes> */}
           <Textform  showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>

      </div>
      {/* </BrowserRouter> */}
  </>
  )
}

export default App;
