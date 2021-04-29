import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <h1>Message App</h1>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100vw;
  min-height: 8vh;
  background: var(--primary);
  padding: 1rem;
  color: var(--secondary);
  font-family: var(--fontHeading);
`;

export default Nav;
