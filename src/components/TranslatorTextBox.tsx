import React from "react";
import { useRef, useState } from "react";
import { translateString } from "../utils/TranslateString";

// type Props = {};

const TranslatorTextBox = () => {
  const inputToTranslate: React.RefObject<HTMLInputElement> = useRef(null);
  const [translatedString, setTranslatedString] = useState<string>("");
  const [fromLanguage, setFromLanguage] = useState<string>("en");
  const [toLanguage, setToLanguage] = useState<string>("es");

  const onChangeFromLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromLanguage(e.target.value);
  };
  const onChangeToLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToLanguage(e.target.value);
  };

  const onClickHandler = () => {
    if (inputToTranslate.current) {
      if (inputToTranslate.current.value) {
        translateString(
          inputToTranslate.current.value,
          fromLanguage,
          toLanguage
        ).then((text) => setTranslatedString(text));
      } else {
        alert("Text Required");
      }
    }
  };

  return (
    <div className="mt-20 mx-5 flex flex-col gap-4">
      <div className="flex justify-center items-center gap-5">
        {/* text to be translated */}
        <input
          required
          ref={inputToTranslate}
          className="border-2 border-black px-3 py-4 rounded-lg "
          placeholder="Enter Text"
        />
        <div className="flex justify-center items-center gap-2 py-4 px-2 border-2 border-black rounded-lg">
          <span>From:</span>
          <select className="outline-none" onChange={onChangeFromLanguage}>
            <option value="en" defaultChecked>
              English
            </option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="flex justify-center items-center gap-2 py-4 px-2 border-2 border-black rounded-lg">
          <span>To:</span>
          <select className="outline-none" onChange={onChangeToLanguage}>
            <option value="es" defaultChecked>
              Spanish
            </option>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        <button
          onClick={onClickHandler}
          className="border-2 border-black bg-black text-white px-6 py-4 rounded-lg"
        >
          Translate
        </button>
      </div>
      <div className="flex items-center justify-center">
        {/* translated text */}
        <input
          readOnly
          value={translatedString}
          className="px-5 py-4 w-96 border-2 border-black  rounded-lg"
          placeholder="Translation"
        />
      </div>
    </div>
  );
};

export default TranslatorTextBox;
