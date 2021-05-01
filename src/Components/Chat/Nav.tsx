import styled from "styled-components";
import { useUser } from "../../Providers/UserProvider";

const Nav: React.FC<{ logout: () => void }> = ({ logout }) => {
  const { user } = useUser();

  const clickHandler = () => {
    logout();
  };

  return (
    <StyledNav>
      <h1>Message App</h1>
      {user && <button onClick={clickHandler}>Logout</button>}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100vw;
  height: var(--navHeight);
  background: var(--primary);
  padding: 1rem;
  color: var(--secondary);
  font-family: var(--fontHeading);
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: 0;
    padding: 0.5rem 0.6rem;
    color: var(--primary);
    background: var(--secondary);
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
  }
`;

export default Nav;
