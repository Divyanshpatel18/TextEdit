import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // console.log(text);
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const copyText = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // document.getSelection().removeAllRanges();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div
          className="mb-3 container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <label htmlFor="myBox" className="form-label">
            <h1> {props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "#df6b6b" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            rows="3"
          ></textarea>
        </div>
        <div
          className="container "
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <button
            disabled={text.length === 0}
            className="btn btn-primary button"
            // style={{
            //   backgroundColor:
            //     props.getcolor === "primary" ? "#ffd800" : "rgb(144 194 0);"
            // }}
            onClick={handleUpClick}
          >
            {" "}
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary ms-2 button"
            // style={{
            //   backgroundColor:
            //     props.getcolor === "primary" ? "#ffd800" : "rgb(144 194 0);"
            // }}
            onClick={copyText}
          >
            {" "}
            Copy text {console.log(props.getcolor)}
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> word summary</h2>

        <p>
          {text.length} characters and{" "}
          {
            // regular expression
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words
        </p>
      </div>
    </>
  );
}
