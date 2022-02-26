import styled from "styled-components";
const Button = ({ text, className }) => {
  return <ButtonComp className={`btn-comp ${className}`}> {text} </ButtonComp>;
};

const ButtonComp = styled.div`
  height: 40px;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  border: none;
  border-radius: 32px;
  box-shadow: rgb(0, 0, 0);
  line-height: 14.4px;
  cursor: pointer;
  margin: 0 15px;
  @media (max-width: 768px) {
    height: 40px;
    width: 443px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 12px;
    border: none;
    border-radius: 32px;
    box-shadow: rgb(0, 0, 0);
    line-height: 14.4px;
    cursor: pointer;
  }
`;

export default Button;
