import React, { useId, useRef, useState } from "react";

const UncontrolledComponent = () => {
  const [text, setText] = useState(null);

  const inputref = useRef();

  console.log(text);

  const handleChange = (e) => {
    alert(text);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target.elements.uncontrolled.value);
  };

  const handleSubmitWithRef = (e) => {
    e.preventDefault();
    alert(inputref.current.value);
  };

  return (
    <div>
      <div className="controlled">
        <label htmlFor="controlled" style={{ display: "block" }}>
          About{" "}
        </label>
        <textarea
          id="controlled"
          value={text}
          cols={30}
          rows={10}
          onChange={handleChange}
        />
      </div>

      {/* uncontrolled form without ref */}
      <form className="uncontrolled" onSubmit={handleSubmit}>
        <label htmlFor="uncontrolled" style={{ display: "block" }}>
          {" "}
          Uncontrolled Form{" "}
        </label>
        <input
          type="text"
          id="uncontrolled"
          defaultValue="Un-controlled component"
        />
        <button type="submit">Submit</button>
      </form>

      {/* uncontrolled form with ref */}
      <form className="uncontrolledwithref" onSubmit={handleSubmitWithRef}>
        <label htmlFor="uncontrolledwithref" style={{ display: "block" }}>
          {" "}
          Uncontrolled Form with ref{" "}
        </label>
        <input
          type="text"
          id="uncontrolledwithref"
          defaultValue="Un-controlled component with ref attribute"
          ref={inputref}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
