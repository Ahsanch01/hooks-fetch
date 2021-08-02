import React, { useState } from "react";
const Exercise = () => {
  const [count, setcount] = useState(0);
  const handleClick = () => {
    setcount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={handleClick}>count me</button>
      {count}
    </div>
  );
};
export default Exercise;
