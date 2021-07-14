import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Container from "./Components/Container";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
      <Container data={nasaData} />
    </div>
  );
}

export default App;
