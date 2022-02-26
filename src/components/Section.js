import styled from "styled-components";
import Button from "./Button";
import Fade from "react-reveal/Fade";
const Section = ({
  text,
  leftButton,
  rightButton,
  desc,
  backgroundImages,
  middleButton,
}) => {
  return (
    <Wrap className="wrapper" style={{ backgroundImage: backgroundImages }}>
      <Fade bottom>
        <ItemText>
          <h1>{text}</h1>
          <p>{desc}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            {middleButton && <Button text={middleButton} className={"mid"} />}
            {leftButton && <Button text={leftButton} className={"left"} />}
            {rightButton && <Button text={rightButton} className={"right"} />}
          </ButtonGroup>
        </Buttons>
      </Fade>

      {text === "Model S" && (
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 40px;
    line-height: 48px;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bot: -40px;
  position: absolute;
  bottom: 50px;
`;
const Buttons = styled.div`
  margin-bottom: 105px;
`;

export default Section;
