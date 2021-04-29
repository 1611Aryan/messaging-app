import { useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import Chat from "./Components/Chat";
import Input from "./Components/Input";
import Nav from "./Components/Nav";

const App = () => {
  useEffect(() => {
    const socket = io("http://localhost:5000");
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <StyledApp>
      <Nav />
      <Chat />
      <Input />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
