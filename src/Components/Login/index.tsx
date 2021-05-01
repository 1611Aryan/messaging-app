import React, { useState } from "react";
import { useHistory } from "react-router";
import { useUser } from "../../Providers/UserProvider";
import { v4 } from "uuid";
import styled from "styled-components";

const Login: React.FC = () => {
  const [name, setName] = useState("");

  const { setUser } = useUser();
  const history = useHistory();

  //Handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ name, id: v4() });
    history.push("/chat");
  };

  return (
    <StyledLogin>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <label htmlFor="name">Name: </label>
        <input
          value={name}
          type="text"
          name="name"
          required
          onChange={changeHandler}
        />
        <button>Enter!!</button>
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: var(--secondary);
  form {
    width: 25%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: var(--primary);
    color: var(--secondary2);
    border-radius: 15px;
    font-family: var(--fontHeading);
    & > * {
      margin: 1rem 0;
    }
  }
  h1 {
    width: 100%;
    padding: 0 0 0.5rem;
    border-bottom: 2px solid var(--tertiary);
  }
  input {
    width: 100%;
    padding: 0.3rem 0.4rem;
    border-radius: 5px;
    border: 0;
    margin: 0.5rem 0 1rem;
    &:focus {
      outline: 0;
    }
  }
  button {
    background: #fff;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 0.4rem;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
`;

export default Login;
