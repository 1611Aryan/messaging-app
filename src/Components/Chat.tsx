import styled from "styled-components";

const Chat: React.FC = () => {
  return (
    <StyledChat>
      <ul>
        <li>Hello</li>
      </ul>
    </StyledChat>
  );
};

const StyledChat = styled.main`
  flex: 1;
  height: 100%;
  background: var(--secondary);
  ul {
    width: 100%;
    height: 100%;
    font-family: var(--fontPara);
    li {
      width: 100%;
      padding: 1rem;
    }
  }
`;

export default Chat;
