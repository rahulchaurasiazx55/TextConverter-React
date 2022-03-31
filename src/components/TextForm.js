import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1"  onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleLoClick}>convert to lowercase</button>
    </div>
  );
}
