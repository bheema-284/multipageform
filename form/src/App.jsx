import { useState } from 'react'
import { Route,Routes } from 'react-router';
import './App.css'
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import {LoginOne} from "./pages/LoginOne"
import { LoginTwo } from './pages/LoginTwo';
function App() {  
  return (
    <div className="App">
      <Routes>
        {/* path="" elemet */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration/one" element={<LoginOne />}></Route>
        <Route path="/registration/two" element={<LoginTwo />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App
