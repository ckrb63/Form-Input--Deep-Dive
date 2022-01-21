import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;