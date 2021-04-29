import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledSearchBar onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={changeHandler}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  border-bottom: 2px solid var(--tertiary);
  border-right: 2px solid var(--tertiary);
  input {
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    width: 100%;
    padding: 0.5rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    background: #ffffff;
    color: #111;
    font-weight: 300;
    &:focus {
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    padding: 0.5rem 0.7rem;
    background: var(--secondary2);
    color: var(--secondary);
    border: 0;
    border-radius: 0 5px 5px 0;
  }
`;

export default SearchBar;
