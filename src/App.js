import { useState } from "react";
import logo from "./assets/logo.svg"
import Form from './components/Form'
import Display from './components/Display'
function App() {
  return (
    <div className="wrapper">
                <img src={logo} alt="Splitter Logo"  />
      <div className='container'>
        <Form/>
      <Display/>
      </div>
    </div>                
  );
}

export default App;
