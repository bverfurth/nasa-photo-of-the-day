import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import stars from "../Assets/stars.gif";

const MediaContainer = styled.div`
  background-image: url(${stars});
  h1 {
    color: white;
    background-color: gray;
    &:hover {
      transform: scale(2);
      transition: all 0.05s ease-in-out;
    }
    transition: all 2s ease-in-out;
  }
  .video {
    margin: 0 auto;
  }
  img {
    width: 30em;
    height: 30em;
    margin: 0 auto;
    &:hover {
      transform: scale(1.5);
      transition: all 5s ease-in-out;
    }
    transition: all 0.05s ease-in-out;
  }
  transition: all 2s ease-in-out;
  p {
    color: white;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  h4 {
    color: white;
  }
`;

export default function Media(props) {
  const { data } = props;

  if (!data) return <h3>Loading...</h3>;
  return (
    <MediaContainer>
      <ReactPlayer url={data.url} className="video" />
      <h4>{data.title}</h4>
      <p>
        <b>Image Credit & Copyright: </b>
        <img src="https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg"></img>
        {data.copyright}
      </p>
      <p>
        <b>Explanation: </b>
        {data.explanation}
      </p>
    </MediaContainer>
  );
}
