import React from 'react';
import './Input.css';

interface InputProps {
  sharedInputValue: string,
  setSharedInputValue: React.Dispatch<React.SetStateAction<string>>,
  alphabet?: boolean
}

const Input = ({sharedInputValue, setSharedInputValue, alphabet}: InputProps) => {

  return (
    <div className="input">
      <input value={sharedInputValue} onChange={(e) => {setSharedInputValue(e.target.value)}}></input>
    </div>
  );
}

export default Input;
