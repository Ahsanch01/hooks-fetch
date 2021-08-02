import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Exercise from "./exercise";
import Search from "./component/Search";
import DropDown from "./component/DropDown";
import Translate from "./component/Translate";
import Exercise2 from "./exercise2";
import Route from "./component/Route";
import Header from "./component/Header";
const option = [
  { label: "The red color", value: "red" },
  { label: "The Green Color", value: "green" },
  { label: "the blue Color", value: "blue" },
];
const items = [
  { title: "What is React", content: "React is JS front end library" },
  {
    title: "How do you react",
    content: "you use react as component based website",
  },
];

export default () => {
  const [selected, setSelected] = useState(option[0]);
  const [showDrop, setDrop] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          option={option}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* <Search /> */}

      {/* <button
        onClick={() => {
          setDrop(!showDrop);
        }}
      >
        toggle
      </button>
      {showDrop ? (
        <DropDown
          option={option}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}
      {/* <Translate /> */}
      {/* <Exercise2 /> */}
    </div>
  );
};
