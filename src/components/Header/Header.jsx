import React from "react";
import siteLogoImg from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { HeaderBox, HeaderWrapper, Img, Links } from "./Header.style";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
const Header = () => {
  return (
    <HeaderBox>
      <div className="container">
        <HeaderWrapper className="wrapper">
          <Link to={"/"}>
            <Img
              src={siteLogoImg}
              width={60}
              height={60}
              alt="site logo image"
            />
          </Link>
          <Links href="mailto:olloyorovxurmatbek1514@gamil.com">
            <TfiEmail fontSize={23} />
            olloyorovxurmatbek1514@gamil.com
          </Links>
          <Links href="tel:+998975181514">
            <HiOutlinePhone fontSize={23} />
            +998975181514
          </Links>
        </HeaderWrapper>
      </div>
    </HeaderBox>
  );
};
export default Header;
