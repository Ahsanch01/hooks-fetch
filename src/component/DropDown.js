import React, { useEffect, useState, useRef } from "react";

const DropDown = ({ label, option, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);
  const ref = useRef();
  const renderDown = option.map((op) => {
    if (op.value == selected.value) {
      return null;
    }
    return (
      <div className="item" key={op.value} onClick={() => onSelectedChange(op)}>
        {op.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="lable">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible action" : ""} `}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            onClick={() => setOpen(open)}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {renderDown}
          </div>
        </div>
      </div>
      <h1 style={{ color: `${selected.value}` }}>Helo pakistan</h1>
    </div>
  );
};

export default DropDown;
