import styled from "styled-components";
// @ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages: React.FC<{
  messages: {
    message: string;
    sender: {
      name: string;
      id: string;
    };
  }[];
}> = ({ messages }) => {
  return (
    <StyledChat>
      <ScrollToBottom className="messagesContainer">
        <ul>
          {messages.map((msg, index) => (
            <Message msg={msg} key={index} />
          ))}
        </ul>
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
    padding: 1rem;
    ul {
      display: flex;
      flex-direction: column;
    }
    .sent {
      align-self: flex-end;
    }
    .admin {
      width: auto !important;
      align-self: center;
      padding: 0.5rem 0rem !important;
      border-radius: 10px !important;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        padding: 0 !important;
      }
    }
    .recieved {
      align-self: flex-start;
    }
  }
`;

export default Messages;
