import React from "react";
import ReactPlayer from "react-player";

export default function Media(props) {
  const { data } = props;

  if (!data) return <h3>Loading...</h3>;
  return (
    <>
      <ReactPlayer url={data.url} />
      <h4>{data.title}</h4>
      <p>
        <b>Image Credit & Copyright: </b>
        {data.copyright}
      </p>
      <p>
        <b>Explanation: </b>
        {data.explanation}
      </p>
    </>
  );
}
