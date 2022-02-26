import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        text={"Model S"}
        desc={"Order Online for Toucless Delivery"}
        leftButton={'Custom Order'}
        rightButton={'Existing inventory'}
        backgroundImages={'url("./images/model-s.jpg")'}
      />
      <Section
        text={"Model Y"}
        desc={"Order Online for Toucless Delivery"}
        leftButton={'Custom Order'}
        rightButton={'Existing inventory'}
        backgroundImages={'url("./images/model-y.jpg")'}
      />
      <Section
        text={"Model 3"}
        desc={"Order Online for Toucless Delivery"}
        leftButton={'Custom Order'}
        rightButton={'Existing inventory'}
        backgroundImages={'url("./images/model-3.jpg")'}
      />
      <Section
        text={"Model X"}
        desc={"Order Online for Toucless Delivery"}
        leftButton={'Custom Order'}
        rightButton={'Existing inventory'}
        backgroundImages={'url("./images/model-X.jpg")'}
      />
      <Section
        text={"Solar Panels"}
        desc={"Lower Cost Solar Panels in America"}
        leftButton={'Order Now'}
        rightButton={'Learn More'}
        backgroundImages={'url("./images/solar-panel.jpg")'}
      />
      <Section
        text={"Solar Roof"}
        desc={"Produce Clean Energy From Your Roof"}
        leftButton={'Order Now'}
        rightButton={'Learn More'}
        backgroundImages={'url("./images/solar-roof.jpg")'}
      />
      <Section
        text={"Accessories"}
        middleButton={'Shop Now'}
        backgroundImages={'url("./images/accessories.jpg")'}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
