import { useState } from "react";
import IsValidInfo from "../utils/IsValidInfo";

const useInput = (REGEXP, MSG, initValue = "") => {
  const [inputValue, setInputValue] = useState(initValue);
  const [message, setMessage] = useState(">");
  const isValid = IsValidInfo(REGEXP, inputValue);

  const inputChangeHanlder = (e) => {
    setInputValue(e.target.value);
    if (isValid) {
      setMessage(">");
    } else {
      setMessage(MSG);
    }
  };
  const resetInputValue = () => {
    setInputValue(initValue);
  };

  return {
    value: inputValue,
    isValid,
    inputChangeHanlder,
    resetInputValue,
    message,
  };
};
export default useInput;
