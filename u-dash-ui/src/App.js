import './App.css';
import React from "react";
import Message from './components/Messages';
import Header from './components/Header';
import MapPage from './components/MapPage';
import Menu from './components/Menu';
import Orders from './components/Orders'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Router>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/map" element={<MapPage/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
