import React from "react";
import { Container } from "../../styles/ContainerStyle";
import { TfiViewGrid } from "react-icons/tfi";
import { FaSwatchbook } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import YutuqlarImage from "../../../public/8-maktab.jpeg";
import {
  Box,
  Img,
  InBox,
  InfoLink,
  InfoTitle,
  ItemInfo,
  ListInfo,
  WrapperIn,
} from "./InfoSchoolStyle";

const InfoSchool = () => {
  return (
    <Box>
      <Container>
        <ListInfo>
          <ItemInfo>
            <InBox bgColor={"#00B3FF"} border={"4px solid red"}>
              <TfiViewGrid fontSize={45} />
              <WrapperIn>
                <InfoTitle>Maktab hayoti</InfoTitle>
                <InfoLink to={"/about"}>Batafsil</InfoLink>
              </WrapperIn>
            </InBox>
            <Img src={YutuqlarImage} width={435} height={465} alt="" />
          </ItemInfo>
          <ItemInfo>
            <InBox bgColor={"#fff"} border={"4px solid red"}>
              <FaSwatchbook fontSize={45} />
              <WrapperIn>
                <InfoTitle color={"#000"}>Ta'lim</InfoTitle>
                <InfoLink to={"/about"}>Batafsil</InfoLink>
              </WrapperIn>
            </InBox>
            <Img src={YutuqlarImage} width={435} height={465} alt="" />
          </ItemInfo>
          <ItemInfo>
            <InBox bgColor={"#00AF00"} border={"4px solid transparent"}>
              <GiMicrophone fontSize={45} />
              <WrapperIn>
                <InfoTitle>Tadbirlar</InfoTitle>
                <InfoLink to={"/about"}>Batafsil</InfoLink>
              </WrapperIn>
            </InBox>
            <Img src={YutuqlarImage} width={435} height={465} alt="" />
          </ItemInfo>
        </ListInfo>
      </Container>
    </Box>
  );
};

export default InfoSchool;
