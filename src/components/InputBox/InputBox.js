import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputBox.css";

export const InputBox = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onClickBtn = () => {
    if (text) {
      onAdd(text);
      setText("");
    } else {
      alert("Please Entered a message");
    }
  };
  return (
    <div className="input-box">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClickBtn}>POST</button>
    </div>
  );
};

InputBox.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
