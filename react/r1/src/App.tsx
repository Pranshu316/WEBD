// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter.tsx";
import home from "./home.tsx";
// import {useState} from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => 
  {
  return(
    <>
    <Router>
      <Router path="/counter" element={<Counter/>}/>
    </Router>
    render(<Counter />, document.getElementById('main'));
    </>
  )
  };

export default App;
