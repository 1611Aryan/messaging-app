import React, { useState } from "react";
import styled from "styled-components";

const Input: React.FC<{ sendMessage: (msg: string) => void }> = ({
  sendMessage,
}) => {
  //State
  const [message, setMessage] = useState("");

  //Handlers

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <StyledInput onSubmit={submitHandler}>
      <input value={message} type="text" onChange={changeHandler} />
      <button>Send</button>
    </StyledInput>
  );
};

const StyledInput = styled.form`
  --borderRadius: 15px;
  width: 100%;
  height: var(--inputHeight);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  font-family: var(--fontPara);
  input,
  button {
    border: 0;
    padding: 0.6rem;
    border-radius: 0;
    font-size: 1rem;

    &:hover,
    &:focus {
      outline: 0;
    }
  }
  input {
    flex: 1;

    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  }
  button {
    background: var(--tertiary);
    color: var(--secondary);
    cursor: pointer;
    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
  }
`;

export default Input;