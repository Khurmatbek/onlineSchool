import React from "react";
import styled from "styled-components";
import Bg from "../../../public/school.png";

export const BgBox = styled.div`
  max-width: 2500px;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background-image: url("school.png");
  opacity: 0.4;
  background-size: 100% 700px;
  background-repeat: no-repeat;
  background-position: center;
  filter:contrast(1.5);
`;
export const WrapperBox = styled.div`
  width: 100%;
  background-color: #3769b8;
`;
const BackGroundImageSchool = () => {
  return (
    <WrapperBox>
      <BgBox></BgBox>
    </WrapperBox>
  );
};

export default BackGroundImageSchool;
