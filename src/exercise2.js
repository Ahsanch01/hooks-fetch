import React, { useState, useEffect } from "react";
import axios from "axios";
const Exercise2 = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const result = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(data);
    };
    result();
  }, []);
  const show = user.map((s) => {
    return (
      <div key={s.id}>
        <li>{s.name}</li>
        <h1>{s.email}</h1>
      </div>
    );
  });
  return <div>{show}</div>;
};
export default Exercise2;
