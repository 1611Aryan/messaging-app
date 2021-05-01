import styled from "styled-components";
import { useUser } from "../../Providers/UserProvider";

interface message {
  message: string;
  sender: {
    name: string;
    id: string;
  };
}

const Message: React.FC<{ msg: message }> = ({ msg }) => {
  const { user } = useUser();

  return (
    <StyledMessage
      className={`message ${
        msg.sender.id === user.id
          ? "sent"
          : msg.sender.id === "admin"
          ? "admin"
          : "recieved"
      }`}
    >
      <p> {msg.message}</p>
      <span>
        {msg.sender.id === user.id || msg.sender.id === "admin"
          ? null
          : `~${msg.sender.name}`}
      </span>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  min-width: 10vw;
  max-width: 60%;
  display: inline-flex;
  padding: 0.5rem 1.2rem;
  background: var(--secondary);
  border-radius: 25px;
  margin: 0 0 1.5rem 0;
  flex-direction: column;
  span {
    font-size: 0.6rem;
    align-self: flex-end;
  }
  p {
    max-width: 100%;
    overflow-wrap: break-word;
    font-size: 1rem;
    padding: 0.2rem 0;
  }
`;

export default Message;
