import profilePicture from "./../../Media/profile.png";

import { user } from "./";
import styled from "styled-components";

const Participant: React.FC<{ participant: user }> = ({ participant }) => (
  <StyledParticipant>
    <img src={profilePicture} alt="profile" />
    <span>
      {participant.name}
      <small>{participant.typing && "Typing...."}</small>
    </span>
  </StyledParticipant>
);

const StyledParticipant = styled.li`
  width: 100%;
  padding: 1.5rem 1rem;

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
  span {
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    small {
      display: inline-block;
      font-size: 0.6em;
      min-height: 0.8rem !important;
    }
  }
  & + li {
    border-top: 1px solid var(--tertiary);
  }
`;

export default Participant;
