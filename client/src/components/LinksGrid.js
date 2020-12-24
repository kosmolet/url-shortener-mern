import React from "react";
import { Link } from "react-router-dom";

const LinksGrid = ({ links }) => {
  if (!links.length) {
    return <p className="center">Here is no links yet</p>;
  }

  const truncateString = (str, num) => {
    return str?.length > num ? `${str.substr(0, num - 1)}...` : str;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Original</th>
          <th>Shorten</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{truncateString(link.from, 50)}</td>
              <td>{truncateString(link.to, 130)}</td>
              <td>
                <Link to={`/details/${link._id}`}>Open</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LinksGrid;
