import { useState } from "react";
import useForm from "../hooks/use-basic-input";
const BasicForm = (props) => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    enteredInputHandler: nameInputHandler,
    enteredInputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useForm((input) => input.trim() !== "");
  const {
    value: emailInput,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    enteredInputHandler: emailInputHandler,
    enteredInputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useForm((input) => input.trim() !== "" && input.includes("@"));
  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    isInvalid: lastNameIsInvalid,
    enteredInputHandler: lastNameInputHandler,
    enteredInputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset,
  } = useForm((input) => input.trim() !== "");
  const nameStyle = nameIsInvalid ? "form-control invalid" : "form-control";
  const emailStyle = emailIsInvalid ? "form-control invalid" : "form-control";
  const lastNameStyle = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log({
      FistName: nameInput,
      Email: emailInput,
    });
    nameReset();
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
          />
          {nameIsInvalid && <div className="error-text">No name!</div>}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastNameInput}
          />
          {lastNameIsInvalid && <div className="error-text">No last name!</div>}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={emailInput}
        />
        {emailIsInvalid && <div className="error-text">No email!</div>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
