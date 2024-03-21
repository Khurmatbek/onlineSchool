import React from "react";
import styled from "styled-components";
export const BgBox = styled.div`
  max-width: 3000px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  background: url("shcool.jpeg");
  opacity: 0.6;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  filter: contrast(1.7);
`;

export const WrapperBox = styled.div`
  width: 100%;
  background-color: #094ca8;
`;
const BackGroundImageSchool = () => {
  return (
    <WrapperBox>
      <BgBox />
    </WrapperBox>
  );
};

export default BackGroundImageSchool;
