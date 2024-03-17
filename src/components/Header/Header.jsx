import React from "react";
import siteLogoImg from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { HeaderBox, HeaderWrapper, Img, Links } from "./Header.style";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
import { Container } from "../../styles/ContainerStyle";
const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <HeaderWrapper className="wrapper">
          <Link to={"/"}>
            <Img
              src={siteLogoImg}
              width={60}
              height={60}
              alt="site logo image"
            />
          </Link>
          <Links href="mailto:8maktab@gmail.com">
            <TfiEmail fontSize={23} />
            8maktab@gmail.com
          </Links>
          <Links href="tel:+998712587070">
            <HiOutlinePhone fontSize={23} />
            +998 (71) 258-70-70
          </Links>
        </HeaderWrapper>
      </Container>
    </HeaderBox>
  );
};
export default Header;
