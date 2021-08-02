import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";
const Options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];
const Translate = () => {
  const [language, setLanguage] = useState(Options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <DropDown
        option={Options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select Language"
      />
      <hr />
      <div className="ui header">
        <h1>Output</h1>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;
