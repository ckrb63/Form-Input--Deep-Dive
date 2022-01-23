import { useEffect, useState } from "react";
import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    isInValid: nameIsInvalid,
    enteredInputHandler: enteredNameHandler,
    enteredInputBlurHandler: enteredNameBlurHandler,
    reset: nameReset,
  } = useInput((input) => input.trim() !== "");
  const nameInputStyle = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const {
    value : enteredEmail,
    isValid : emailIsValid,
    isInValid : emailIsInValid,
    enteredInputHandler : enteredEmailHandler,
    enteredInputBlurHandler : enteredEmailBlurHandler,
    reset : emailReset,
  } = useInput((input) => input.trim() !== "" && input.includes("@"));

  const emailInputStyle = emailIsInValid
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    console.log({
      name: enteredName,
      email: enteredEmail,
    });
    nameReset();
    emailReset();
  };
  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={enteredNameHandler}
          onBlur={enteredNameBlurHandler}
        />
        {nameIsInvalid && (
          <div className="error-text">You can't submit blank!</div>
        )}
      </div>
      <div className={emailInputStyle}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={enteredEmailHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {emailIsInValid && <div className="error-text">This isn't E-Mail!</div>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
