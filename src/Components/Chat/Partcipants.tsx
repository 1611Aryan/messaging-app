import styled from "styled-components";
import SearchBar from "./SearchBar";
import profilePicture from "./../../Media/profile.png";

const Participants: React.FC = () => {
  return (
    <StyledPartcipants>
      <SearchBar />
      <ul>
        <li>
          <img src={profilePicture} alt="profile" />
          <span>Harry</span>
        </li>
        <li>
          <img src={profilePicture} alt="profile" />
          <span>Ron</span>
        </li>
        <li>
          <img src={profilePicture} alt="profile" />
          <span>Hermione</span>
        </li>
      </ul>
    </StyledPartcipants>
  );
};

const StyledPartcipants = styled.div`
  width: 20%;
  height: 100%;
  background: var(--secondary2);

  ul {
    list-style-type: none;
    width: 100%;
    height: 100%;
    overflow: hidden auto;
    font-family: var(--fontPara);

    border-right: 2px solid var(--tertiary);
    li {
      width: 100%;
      padding: 1.5rem 1rem;
      font-size: 1.1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;

      background: var(--secondary);
      img {
        width: 15%;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 1rem 0 0;
      }
      & + li {
        border-top: 1px solid var(--tertiary);
      }
    }
  }
`;
export default Participants;
