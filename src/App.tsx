import { Route, Switch } from "react-router";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { UserProvider } from "./Providers/UserProvider";

const App = () => {
  return (
    <div>
      <UserProvider>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
