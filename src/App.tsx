import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./Routes";
import './App.css';
import { HomePage } from './pages/HomePage';
//import {JokeDetail} from './pages/JokeDetail';
import React from 'react';
import { JokeDetail } from './pages/JokeDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage/>}></Route>
        <Route path={ROUTES.JOKES} element={<JokeDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
