import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import Header from "./Components/Header";
import Media from "./Components/Media";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=9VzAV8Aif3587oCYx9C50rl2G9DgVceb3ItUJWq3"
      )
      .then((response) => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header data={nasaData} />
      <Media data={nasaData} />
    </div>
  );
}

export default App;
