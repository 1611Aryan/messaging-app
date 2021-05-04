import React, { useState } from "react";
import { useHistory } from "react-router";
import { useUser } from "../../Providers/UserProvider";
import { v4 } from "uuid";
import styled from "styled-components";
import Join from "./Join";
import Create from "./Create";
import Choose from "./Choose";
import { roomId } from "../../util";

const Login: React.FC = () => {
  const [selected, setSelected] = useState<"" | "join" | "create">("");
  const [name, setName] = useState<string | null>(null);
  const [room, setRoom] = useState<string | null>(null);

  const { setUser } = useUser();
  const history = useHistory();

  //Handlers
  const clickHandler = (chosen: "join" | "create") => {
    setSelected(chosen);
  };

  const login = () => {
    console.log({ name, room });
    if (name) {
      if (selected === "join" && room) {
        setUser({ name: name, room: room, id: v4() });
      } else {
        setUser({ name: name, room: roomId(8), id: v4() });
      }
      history.push("/chat");
    }
  };

  return (
    <StyledLogin>
      {selected === "join" ? (
        <Join login={login} setName={setName} setRoom={setRoom} />
      ) : selected === "create" ? (
        <Create login={login} setName={setName} />
      ) : (
        <Choose clickHandler={clickHandler} />
      )}
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--secondary);
  form {
  }
  h1 {
    width: 100%;
    padding: 0 0 0.5rem;
    border-bottom: 2px solid var(--tertiary);
  }
`;

export default Login;
