import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../store/AuthContext";
import { useHistory } from "react-router-dom";

const CreateLink = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const handlePress = async (event) => {
    if (event.key === "Enter") {
      try {
        console.log(link, auth.token);
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/details/${data.link._id}`);
      } catch (err) {}
    }
  };

  return (
    <div className="row">
      <div className="col s10 offset-s2 link-wrapper">
        <div className="input-field">
          <input
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={handlePress}
          />
          <label htmlFor="link">Enter Link</label>
        </div>
      </div>
    </div>
  );
};

export default CreateLink;
