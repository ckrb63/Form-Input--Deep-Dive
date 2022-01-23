import { useState } from "react";
const useForm = (validation) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const inputIsValid = validation(enteredInput);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const enteredInputHandler = (event) => {
    setEnteredInput(event.target.value);
  };
  const enteredInputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setEnteredInput('');
    setInputIsTouched(false);
  };

  return {
    value : enteredInput,
    isValid : inputIsValid,
    isInvalid : inputIsInvalid,
    enteredInputHandler,
    enteredInputBlurHandler,
    reset
  };
};
export default useForm;
