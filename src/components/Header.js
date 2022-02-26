import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = ({ color }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu className="menu">
        {cars &&
          cars.map((car, index) => (
            <a href="/" key={index}>
              {car}
            </a>
          ))}
        {/* <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
        <a href="/">Solar Roof</a>
        <a href="/">Solar Panels</a> */}
      </Menu>
      <RightMenu className="right-menu">
        <a href="/">shop</a>
        <a href="/">Tesla account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
        {/* <FaBars  style={{cursor:'pointer'}} /> */}
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Test Drive</a>
        </li>
        <li>
          <a href="/">CyberTruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">Powerwall</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">Utilities</a>
        </li>
        <li>
          <a href="/">Find Us</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Menu = styled.div`
  a {
    margin-right: 10px;
    font-weight: 600;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin: 0 10px;
    flex-wrap: nowrap;
  }
`;
const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 54px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: capitalize;
  z-index: 100;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 99999;
  transition: 1s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

export default Header;
