import styled from "styled-components";

const Input: React.FC = () => {
  return (
    <StyledInput action="">
      <input type="text" />
      <button>Send</button>
    </StyledInput>
  );
};

const StyledInput = styled.form`
  --borderRadius: 15px;
  width: 100vw;
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
    background: var(--secondary);
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  }
  button {
    background: var(--tertiary);
    cursor: pointer;
    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
  }
`;

export default Input;
