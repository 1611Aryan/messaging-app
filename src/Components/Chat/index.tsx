import { useEffect, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import Input from "./Input";
import Messages from "./Messages";
import Nav from "./Nav";
import Participants from "./Partcipants";

let socket: SocketIOClient.Socket;

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://message200.herokuapp.com/"
    : "http://localhost:5000";

const Chat: React.FC = () => {
  //State
  const [messages, setMessages] = useState<string[]>([]);

  //Componetnt did mount
  useEffect(() => {
    socket = io(ENDPOINT, {
      transports: ["websocket"],
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (msg: string) => {
      setMessages(messages => [...messages, msg]);
    });
    console.log("Message Recieved");
  }, []);

  const sendMessage = (msg: string) => {
    socket.emit("message", msg);
    console.log("Message Sent");
  };

  return (
    <StyledChat>
      <Nav />
      <StyledMain>
        <Participants />
        <div className="chat">
          <Messages messages={messages} />
          <Input sendMessage={sendMessage} />
        </div>
      </StyledMain>
    </StyledChat>
  );
};

const StyledChat = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  width: 100vw;
  height: calc(100vh - var(--navHeight));
  display: flex;
  .chat {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default Chat;
