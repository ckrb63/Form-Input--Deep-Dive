import { useState } from "react";

const useInput = (validTest) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredInputIsValid = validTest(enteredInput);
  const isInValid = isTouched && !enteredInputIsValid;

  const enteredInputHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const enteredInputBlurHandler = () => {
    setIsTouched(true);
  };
  
  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
  };
  return {
    value : enteredInput,
    isValid : enteredInputIsValid,
    isInValid,
    enteredInputHandler,
    enteredInputBlurHandler,
    reset
  };
};
export default useInput;
