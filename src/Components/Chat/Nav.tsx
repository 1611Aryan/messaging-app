import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <h1>Message App</h1>
      <button>Logout</button>
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
    padding: 0.4rem 0.6rem;
    color: var(--primary);
    background: var(--secondary);
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

export default Nav;
