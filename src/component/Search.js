import React, { useState, useEffect } from "react";
import axios from "axios";

const Sreach = () => {
  const [term, setTerm] = useState("programing");
  const [result, setResult] = useState([]);
  console.log(result);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };
    if (term && !result.length) {
      search();
    } else {
      const timeoutid = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutid);
      };
    }
  }, [term]);
  console.log(term);
  const renderResult = result.map((r) => {
    return (
      <div className="item" key={r.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`http://en.wikipedia.org?curid=${r.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{r.title}</div>
          <span dangerouslySetInnerHTML={{ __html: r.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search </label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <di className="ui celled list">{renderResult}</di>
    </div>
  );
};
export default Sreach;
