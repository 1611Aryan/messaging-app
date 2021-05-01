import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import io from "socket.io-client";
import styled from "styled-components";
import { useUser } from "../../Providers/UserProvider";
import Input from "./Input";
import Messages from "./Messages";
import Nav from "./Nav";
import Participants from "./Partcipants";

let socket: SocketIOClient.Socket;

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://message200.herokuapp.com/"
    : "http://localhost:5000";

interface message {
  message: string;
  sender: {
    name: string;
    id: string;
  };
}

const Chat: React.FC = () => {
  //State
  const [messages, setMessages] = useState<message[]>([]);

  const { user, setUser } = useUser();
  const history = useHistory();

  //Componetnt did mount
  useEffect(() => {
    if (user.name === null || user.id === "") {
      history.push("/");
    }

    socket = io(ENDPOINT, {
      transports: ["websocket"],
    });

    socket.emit("join", user);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (msg: message) => {
      setMessages(messages => [...messages, msg]);
    });
    console.log("Message Recieved");
  }, []);

  const sendMessage = (msg: message) => {
    socket.emit("message", msg);
    console.log("Message Sent");
  };

  const logout = () => {
    setUser({ name: null, id: null });
    socket.disconnect();
    history.push("/");
  };

  return (
    <StyledChat>
      <Nav logout={logout} />
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
