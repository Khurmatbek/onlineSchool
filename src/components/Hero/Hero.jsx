import React from "react";
import gerb from "../../../public/gerb.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineNewReleases } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import {
  HeroBox,
  HeroWrapper,
  Img,
  List,
  NavLinks,
  Nav,
  LinkHero,
  UnderLine,
  Item,
} from "./Hero.style";
import { Container } from "../../styles/ContainerStyle";

const Hero = () => {
  return (
    <HeroBox>
      <Container>
        <HeroWrapper>
          <LinkHero to={"/"}>
            <Img src={gerb} width={100} height={84} alt="" />
            8-Maktab
          </LinkHero>
          <Nav>
            <List>
              <Item>
                <NavLinks to={"/"}>
                  {" "}
                  <IoHomeOutline />
                  Bosh sahifa{" "}
                </NavLinks>
                <UnderLine className="underline"></UnderLine>
              </Item>
              <Item>
                <NavLinks to={"/about"}>
                  <LuInfo />
                  Maktab haqida{" "}
                </NavLinks>
                <UnderLine className="underline"></UnderLine>
              </Item>
              <Item>
                <NavLinks to={"/news"}>
                  <MdOutlineNewReleases />
                  Yangiliklar
                </NavLinks>
                <UnderLine className="underline"></UnderLine>
              </Item>
              <Item>
                <NavLinks to={"/learn"}>
                  <MdOutlinePlayLesson />
                  Online darslar
                </NavLinks>
                <UnderLine className="underline"></UnderLine>
              </Item>
              <Item>
                <NavLinks to={"/achievements"}>
                  <IoGiftOutline />
                  Yutuqlarimz
                </NavLinks>
                <UnderLine className="underline"></UnderLine>
              </Item>
              <Item>
                <NavLinks to={"/management"}>
                  <FaHandsHoldingChild />
                  Rahbariyat
                </NavLinks>
                <UnderLine className="underline"></UnderLine>
              </Item>
            </List>
          </Nav>
        </HeroWrapper>
      </Container>
    </HeroBox>
  );
};

export default Hero;
