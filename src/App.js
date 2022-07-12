
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error"
import SingleMovie from "./Components/SingleMovie";
import "./App.css";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading]= useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    loading?
      <Loader/>
    :
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
};

export default App;