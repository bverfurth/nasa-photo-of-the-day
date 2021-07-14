import React from "react";
import ReactPlayer from "react-player";

export default function Media(props) {
  const { data } = props;

  if (!data) return <h3>Loading...</h3>;
  return (
    <>
      <a href={data.url}>
        <img src={data.url} alt="NASA Topic"></img>
      </a>
      <h4>{data.title}</h4>
      <p>
        <b>Image Credit & Copyright: </b>
        <ReactPlayer url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY">
          {data.copyright}
        </ReactPlayer>
      </p>
      <p>
        <b>Explanation: </b>
        {data.explanation}
      </p>
    </>
  );
}
