import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  let formIsValid = false;
  
  if(enteredNameIsValid&&enteredEmailIsValid){
    formIsValid = true;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setIsTouched(true);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log({
      name : enteredName,
      email : enteredEmail
    });
    setEnteredName("");
    setEnteredEmail("");
    setIsTouched(false);
    setEmailIsTouched(false);
  };
  const isInValid = nameIsTouched && !enteredNameIsValid;
  const emailIsInValid = emailIsTouched && !enteredEmailIsValid;
  const inputStyle = isInValid ? "form-control invalid" : "form-control";
  const emailInputStyle = emailIsInValid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          
        />
        {isInValid && <div className="error-text">You can't submit blank!</div>}
      </div>
      <div className={emailInputStyle}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          
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
