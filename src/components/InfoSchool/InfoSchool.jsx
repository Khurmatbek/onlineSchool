import React from "react";
import { Container } from "../../styles/ContainerStyle";
import online_lesson from "../../../public/onlinedars.jpeg";
import tadbirlar from "../../../public/tadbirlar.jpeg";
import school from "../../../public/shcool.jpeg";

import { GoDeviceCameraVideo } from "react-icons/go";
import { GiNewspaper } from "react-icons/gi";
import { GiArchiveRegister } from "react-icons/gi";
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
            <InBox $start={"start"}>
              <GiArchiveRegister color="#fff" fontSize={50} />
              <WrapperIn>
                <InfoTitle>Maktab hayoti</InfoTitle>
                <InfoLink to={"/"}>Batafsil ma'lumot </InfoLink>
              </WrapperIn>
            </InBox>
            <Img src={school} width={435} height={465} alt="" />
          </ItemInfo>
          <ItemInfo>
            <InBox>
              <GoDeviceCameraVideo color="#fff" fontSize={50} />
              <WrapperIn>
                <InfoTitle>Online darslar</InfoTitle>
                <InfoLink to={"/about"}>Batafsil ma'lumot</InfoLink>
              </WrapperIn>
            </InBox>
            <Img
              $first={"200px 200px 0px 0px"}
              src={online_lesson}
              width={420}
              height={400}
              alt=""
            />
          </ItemInfo>
          <ItemInfo>
            <InBox $start={"end"}>
              <GiNewspaper color="#fff" fontSize={50} />
              <WrapperIn>
                <InfoTitle>Tadbirlar</InfoTitle>
                <InfoLink to={"/about"}>Batafsil ma'lumot</InfoLink>
              </WrapperIn>
            </InBox>
            <Img
              $first={"200px 0px 0px 3px"}
              src={tadbirlar}
              width={435}
              height={465}
              alt=""
            />
          </ItemInfo>
        </ListInfo>
      </Container>
    </Box>
  );
};

export default InfoSchool;
