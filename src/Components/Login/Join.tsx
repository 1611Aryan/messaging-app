import React from "react";
import { StyledForm } from "./style";

const Join: React.FC<{
  login: () => void;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  setRoom: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ login, setName, setRoom }) => {
  //Handlers
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    input: "name" | "room"
  ) => {
    if (input === "name") setName(e.target.value);
    else setRoom(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <h1>Join</h1>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        required
        onChange={e => changeHandler(e, "name")}
      />
      <label htmlFor="room">Room: </label>
      <input
        type="text"
        name="room"
        required
        onChange={e => changeHandler(e, "room")}
      />
      <button>Enter!!</button>
    </StyledForm>
  );
};

export default Join;
