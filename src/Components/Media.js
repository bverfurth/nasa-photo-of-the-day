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
    padding-top: 4em;
    margin: 0 auto;
  }
  img {
    width: 30em;
    height: 30em;
    margin: 0 auto;
    opacity: 70%;
    padding-top: 3em;
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
    padding-bottom: 3em;
    padding-left: 6em;
    padding-right: 6em;
    font-size: 1.2em;
  }
  h4 {
    color: white;
    font-size: 1.4em;
  }
  b {
    padding-top: 4em;
    padding-bottom: 4em;
    font-size: 1.4em;
  }
`;
const TextContainer = styled.div`
  p {
    backdrop-filter: blur(4px);
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
      <TextContainer>
        <p>
          <b>Explanation: </b>
          {data.explanation}
        </p>
      </TextContainer>
    </MediaContainer>
  );
}
