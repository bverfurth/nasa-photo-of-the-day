import React from "react";
import styled from "styled-components";
import stars from "../Assets/stars.gif";
export default function Header(props) {
  const { data } = props;

  const HeaderContainer = styled.div`
    background-image: url(${stars});
    div {
      color: black;
    }
    h1 {
      background-image: url(${stars});
      color: white;
      padding-top: 2em;
    }
    a {
      color: white;
      font-size: 1.2em;
    }
    p {
      color: white;
      padding-bottom: 1em;
      font-size: 1.2em;
      padding-left: 4em;
      padding-right: 4em;
    }
  `;

  const HeaderParagraph = styled.div`
    p {
      backdrop-filter: blur(4px);
      padding: 4em;
    }
  `;

  if (!data) return <h3>Loading...</h3>;
  return (
    <HeaderContainer>
      <h1>
        Astronomy Picture of the Day <span>🚀</span>
      </h1>
      <a>Click Here!! ---{">"} </a>
      <a href="astropix.html">Discover the cosmos! </a>
      <HeaderParagraph>
        <p>
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.
        </p>
      </HeaderParagraph>
      <p>{data.date}</p>
    </HeaderContainer>
  );
}
