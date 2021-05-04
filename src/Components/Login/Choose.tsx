import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Choose: React.FC<{
  clickHandler: (chosen: "join" | "create") => void;
}> = ({ clickHandler }) => {
  return (
    <StyledChoose>
      <div className="option" onClick={() => clickHandler("join")}>
        <FontAwesomeIcon icon={faSignInAlt} />
        <span>Join!</span>
      </div>
      <div className="option" onClick={() => clickHandler("create")}>
        <FontAwesomeIcon icon={faPlus} />
        <span>Create!</span>
      </div>
    </StyledChoose>
  );
};

const StyledChoose = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .option {
    width: 22%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: var(--primary);
    color: #fff;
    border: 3px solid #fff;
    border-radius: 20px;
    font-family: var(--fontHeading);
    cursor: pointer;
    box-shadow: inset 2px 2px 25px rgba(46, 46, 46, 0.2),
      inset -2px -2px 25px rgba(0, 0, 0, 0.2), 2px 2px 15px rgba(0, 0, 0, 0.3);
    svg {
      font-size: clamp(3rem, 7vw, 5rem);
    }
    span {
      align-self: center;
      font-size: clamp(1.5rem, 4vw, 2.5rem);
    }
  }

  @media (max-width: 450px) {
    height: 100vh;
    flex-direction: column;

    .option {
      width: 50%;
      height: 30vh;
    }
  }
`;
export default Choose;
