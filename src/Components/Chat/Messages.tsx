import styled from "styled-components";
// @ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";

const Messages: React.FC<{ messages: string[] }> = ({ messages }) => {
  return (
    <StyledChat>
      <ScrollToBottom className="messagesContainer">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            {msg}
          </div>
        ))}
      </ScrollToBottom>
    </StyledChat>
  );
};

const StyledChat = styled.div`
  flex: 1;
  max-height: calc(100vh - var(--navHeight) - var(--inputHeight));

  .messagesContainer {
    width: 100%;
    height: 100%;
    overflow: hidden auto;
    font-family: var(--fontPara);
    display: flex;
    flex-direction: column;

    .message {
      width: 100%;
      padding: 1rem;
    }
  }
`;

export default Messages;
