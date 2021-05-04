import React from "react";
import { StyledForm } from "./style";

const Create: React.FC<{
  login: () => void;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ login, setName }) => {
  //Handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <h1>Create</h1>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" required onChange={changeHandler} />
      <button>Enter!!</button>
    </StyledForm>
  );
};

export default Create;
