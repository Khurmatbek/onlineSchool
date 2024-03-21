import styled from "styled-components";
import "./App.css";
import BackGroundImageSchool from "./components/BackGroundImageSchool/BackGroundImageSchool";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoSchool from "./components/InfoSchool/InfoSchool";
import GlobalStyles from "./styles/GlobalStyles";
import { Outlet } from "react-router";
import Leaders from "./components/Leaders/Leaders";
export const PositsionBox = styled.div`
  position: relative;
`;

export const BoxFixed = styled.div`
  /* width: 100%; */
  position: relative;
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BoxFixed>
        <Header />
        <Hero />
      </BoxFixed>
      <PositsionBox>
        <BackGroundImageSchool />
        <InfoSchool />
      </PositsionBox>
      <Leaders />
      <Outlet />
    </div>
  );
};
export default App;
