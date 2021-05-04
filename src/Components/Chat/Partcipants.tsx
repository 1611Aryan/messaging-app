import styled from "styled-components";
import Participant from "./Participant";
import SearchBar from "./SearchBar";

import { user } from "./";
import { useUser } from "../../Providers/UserProvider";

const Participants: React.FC<{
  participants: user[];
}> = ({ participants }) => {
  const { user } = useUser();

  return (
    <StyledPartcipants>
      <SearchBar />
      <ul>
        {participants.map(participant => (
          <Participant participant={participant} key={participant.id} />
        ))}
      </ul>
      <footer>
        <p>
          Room ID
          <br />
          <span>{user.room}</span>
        </p>
      </footer>
    </StyledPartcipants>
  );
};

const StyledPartcipants = styled.div`
  width: 20%;
  height: 100%;
  background: var(--secondary2);
  display: flex;
  flex-direction: column;
  footer {
    padding: 0.5rem;
    height: var(--inputHeight);
    background: var(--secondary);
    font-family: var(--fontPara);
    p {
      font-size: clamp(0.8rem, 2vw, 1rem);
      span {
        font-size: 1.2em;
      }
    }
  }
  ul {
    list-style-type: none;
    width: 100%;
    flex: 1;
    overflow: hidden auto;
    font-family: var(--fontPara);

    border-right: 2px solid var(--tertiary);
  }
`;
export default Participants;
