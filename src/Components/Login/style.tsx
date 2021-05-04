import styled from "styled-components";

export const StyledForm = styled.form`
  width: 25%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--primary);
  color: var(--secondary2);
  border-radius: 15px;
  font-family: var(--fontHeading);
  border: 2px solid #fff;
  box-shadow: inset 1px 1px 15px rgba(46, 46, 46, 0.2),
    inset -1px -1px 15px rgba(0, 0, 0, 0.2), 2px 2px 15px rgba(0, 0, 0, 0.3);
  & > * {
    margin: 0.5rem 0;
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

  @media (max-width: 450px) {
    width: 75%;
  }
`;
