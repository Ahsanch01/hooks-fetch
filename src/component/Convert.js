import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebounce] = useState(text);

  useEffect(() => {
    const timerid = setTimeout(() => {
      setDebounce(text);
    }, 500);
    return () => {
      clearTimeout(timerid);
    };
  }, [text]);

  useEffect(() => {
    const result = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    result();
  }, [debouncedText, language]);

  return (
    <div className="ui header">
      <h1>{translated}</h1>
    </div>
  );
};

export default Convert;
