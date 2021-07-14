import React from "react";

export default function Header(props) {
  const { data } = props;

  if (!data) return <h3>Loading...</h3>;
  return (
    <>
      <h1>
        Astronomy Picture of the Day <span>🚀</span>
      </h1>
      <a href="astropix.html">Discover the cosmos! </a>
      Each day a different image or photograph of our fascinating universe is
      featured, along with a brief explanation written by a professional
      astronomer.
      <p>{data.date}</p>
    </>
  );
}
