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

export interface user {
  name: string;
  id: string;
  typing?: boolean;
}
interface message {
  message: string;
  sender: user;
}

const Chat: React.FC = () => {
  //State
  const [messages, setMessages] = useState<message[]>([]);
  const [participants, setParticipants] = useState<user[]>([]);

  const { user, setUser } = useUser();
  const history = useHistory();

  //* Componetnt did mount
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

  //*For recieving Messages
  useEffect(() => {
    socket.on("message", (msg: message) => {
      setMessages(messages => [...messages, msg]);
    });
    console.log("Message Recieved");
  }, []);

  //*For adding members to participants list
  useEffect(() => {
    socket.on("join", (users: user[]) => {
      const participants = users.filter(u => u.id !== user.id);
      setParticipants(participants);
    });
  }, []);

  //* For removing from particpants
  useEffect(() => {
    socket.on("left", (leftUser: user) => {
      setParticipants(participants =>
        participants.filter(p => p.id !== leftUser.id)
      );
    });
  }, []);

  //* Typing
  useEffect(() => {
    socket.on("typing", (user: user) => {
      setParticipants(participants =>
        participants.map(p => {
          if (p.id === user.id) {
            return { ...p, typing: true };
          } else return p;
        })
      );
    });
  }, []);

  //* Stopped Typing
  useEffect(() => {
    socket.on("stopped-typing", (user: user) => {
      setParticipants(participants =>
        participants.map(p => {
          if (p.id === user.id) {
            return { ...p, typing: false };
          } else return p;
        })
      );
    });
  }, []);

  const sendMessage = (msg: message) => {
    socket.emit("message", msg);
    console.log("Message Sent");
  };

  const typing = () => {
    socket.emit("typing", user);
  };

  const logout = () => {
    setUser({ name: null, id: null, room: null });
    socket.disconnect();
    history.push("/");
  };

  return (
    <StyledChat>
      <Nav logout={logout} />
      <StyledMain>
        <Participants participants={participants} />
        <div className="chat">
          <Messages messages={messages} />
          <Input sendMessage={sendMessage} typing={typing} />
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
