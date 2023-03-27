import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MoviesDetail";
import "./App.css"
import './pages/moviesdetail.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
