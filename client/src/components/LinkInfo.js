import React from "react";

const LinkInfo = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>
        Shorten Link:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Origin:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>

      <p>
        Creation Date:{" "}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

export default LinkInfo;
