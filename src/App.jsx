import styled from "styled-components";
import "./App.css";
import BackGroundImageSchool from "./components/BackGroundImageSchool/BackGroundImageSchool";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoSchool from "./components/InfoSchool/InfoSchool";
import GlobalStyles from "./styles/GlobalStyles";
export const PositsionBox = styled.div`
  position: relative;
`;
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <PositsionBox>
        <BackGroundImageSchool />
        <InfoSchool />
      </PositsionBox>
    </>
  );
};
export default App;
