import './App.css';
import React from "react";
import Message from './components/Messages';
import Header from './components/Header';
import MenuPage from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './components/Menu';

import Orders from './components/Orders'

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
