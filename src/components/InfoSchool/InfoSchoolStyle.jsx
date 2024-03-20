import { Link } from "react-router-dom";
import styled from "styled-components";
export const Box = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  top: calc(50% + 220px);

  
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (min-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
export const ItemInfo = styled.li`
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  @media (min-width: 900px) {
    max-width: 450px;
    width: 100%;
  }
`;
export const InBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 25px;
  background-color: ${(props) => props.bgColor || "red"};
  border-right: ${(props) => props.border || ""};
  @media (min-width: 320px) {
    border-right: 4px solid transparent;
    border-bottom: 4px solid red;
  }
  @media (min-width: 900px) {
    border-right: 4px solid red;
    border-bottom: 4px solid transparent;
  }
`;

export const Img = styled.img`
  @media (min-width: 320px) {
    min-width: 280px;
    width: 100%;
    height: 360px;
  }
  @media (min-width: 500px) {
    min-width: 280px;
    width: 100%;
    height: 430px;
  }
  @media (min-width: 900px) {
    min-width: 280px;
    width: 100%;
    height: 465px;
  }
`;

export const WrapperIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const InfoTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.color || "#fff"};
  margin: 0;
  @media (min-width: 320px) {
    font-size: 18px;
  }
`;
export const InfoLink = styled(Link)`
  color: #000;
  @media (min-width: 320px) {
    font-size: 15px;
  }
`;
