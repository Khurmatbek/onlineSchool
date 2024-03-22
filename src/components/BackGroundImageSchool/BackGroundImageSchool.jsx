import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/ContainerStyle";
export const BgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 3000px;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background-image: url("shcool.jpeg");
  opacity: 0.75;
  background-size: 100% 100%  ;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0px 3px 13px 10px rgba(0, 0, 0, 0.3);
  filter: contrast(1.4);
  @media (min-width: 320px) {
    height: 300px;
  }
  @media (min-width: 576px) {
    height: 360px;
  }
  @media (min-width: 756px) {
    height: 400px;
  }
  @media (min-width: 1000px) {
    height: 600px;

  }
`;

export const WrapperBox = styled.div`
  width: 100%;
  padding-bottom: 20px;
  background-color: #094ca8;
`;
const BackGroundImageSchool = () => {
  return (
    <WrapperBox>
      <BgBox/>
    </WrapperBox>
  );
};

export default BackGroundImageSchool;
