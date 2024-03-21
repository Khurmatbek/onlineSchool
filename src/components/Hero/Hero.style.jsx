import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroBox = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  background-color:#436fbc;

`;
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  @media (min-width: 320px) {
    padding-top: 100px;
  }
  @media (min-width: 576px) {
    padding-top: 30px;
  }
`;
export const Img = styled.img`
  width: 100px;
  height: 84px;
  display: block;
  @media (min-width: 320px) {
    width: 50px;
    height: 42px;
  }
  @media (min-width: 576px) {
    width: 100px;
    height: 84px;
  }
`;
export const LinkHero = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  color: #fff;
  font-size: 35px;
  text-decoration: none;
  @media (min-width: 320px) {
    font-size: 25px;
  }
  @media (min-width: 576px) {
    font-size: 35px;
  }
`;
export const Nav = styled.nav`
  width: 100%;
`;
export const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  list-style: none;
  @media (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:hover {
    .underline {
      background-color: white;
    }
  }
`;
export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 3px;
  color: #fff;
`;
export const UnderLine = styled.span`
  display: inline-block;
  width: 140px;
  height: 3px;
  background-color: transparent;
  transition: background 0.5s linear;
`;
