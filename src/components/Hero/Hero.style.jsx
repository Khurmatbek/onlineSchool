import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: #0b4aa8c8;
`;
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
export const Img = styled.img`
  width: 100px;
  height: 84px;
  display: block;
`;
export const LinkHero = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  color: #fff;
  font-size: 35px;
  text-decoration: none;
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
  height: 2px;
  background-color: transparent;
  transition: background 0.5s linear;
`;
