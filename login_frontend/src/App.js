import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Title from './login_portal/Title';
import Home from './admin_home/Home';
import Validation from './admin_dashboard/Validation';
import Request from './admin_dashboard/Request';
import Maker from './admin_dashboard/Maker';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Validation" element={<Validation/>}></Route>
        <Route path="/Request" element={<Request/>}></Route>
        <Route path="/ID_MAKER" element={<Maker/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
