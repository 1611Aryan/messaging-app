import styled from "styled-components";
import Participant from "./Participant";
import SearchBar from "./SearchBar";

import { user } from "./";

const Participants: React.FC<{
  participants: user[];
}> = ({ participants }) => {
  return (
    <StyledPartcipants>
      <SearchBar />
      <ul>
        {participants.map(participant => (
          <Participant participant={participant} key={participant.id} />
        ))}
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
  }
`;
export default Participants;
