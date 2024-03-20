import React from "react";
import styled from "styled-components";
import school from "../../../public/shcool.jpeg";
import { Carousel } from "antd";

export const BgBox = styled.div`
  max-width: 2000px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  background-image: url("shcool.jpeg");
  opacity: 0.6;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  filter: contrast(1.5);
`;
const contentStyle = {
  height: "600px",
  textAlign: "center",

};

export const WrapperBox = styled.div`
  width: 100%;
  background-color: #3769b8;
`;
const BackGroundImageSchool = () => {
  return (
    // <WrapperBox>
    //
    // </WrapperBox>
    <Carousel autoplay  autoplaySpeed={3000} speed={500} dotPosition="top">
      <div>
        <WrapperBox style={contentStyle}>
          <BgBox></BgBox>
        </WrapperBox>
      </div>
      <div>
        <WrapperBox style={contentStyle}>
          <BgBox></BgBox>
        </WrapperBox>
      </div>
      <div>
        <WrapperBox style={contentStyle}>
          <BgBox></BgBox>
        </WrapperBox>
      </div>
      <div>
        <WrapperBox style={contentStyle}>
          <BgBox></BgBox>
        </WrapperBox>
      </div>
    </Carousel>
  );
};

export default BackGroundImageSchool;
