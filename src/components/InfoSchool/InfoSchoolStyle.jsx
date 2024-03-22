import { Link } from "react-router-dom";
import styled from "styled-components";
export const Box = styled.div`
  width: 100%;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-bottom: 60px;
  gap: 30px;
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
  /* width: 100%; */
  max-width: 435px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (min-width: 900px) {
    max-width: 430px;
    width: 100%;
  }
`;
export const InBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  padding: 25px 5px;
  background-color: transparent;
  @media (min-width: 320px) {
    border-right: 4px solid transparent;
  }
  @media (min-width: 900px) {
    border-bottom: 4px solid transparent;
  }
`;

export const Img = styled.img`
  border-radius: 8px;
  height: 400px;
  box-shadow: 0px 3px 13px 10px rgba(0, 0, 0, 0.3);
  opacity: 0.82;
  filter: contrast(1.3);
  /* border-radius: ${(props) => props.$first || "3px 200px 0px 0px"};  */
  border: 8px solid #ffffff;
  @media (min-width: 320px) {
    min-width: 280px;
    width: 100%;
    height: 290px;
  }
  @media (min-width: 500px) {
    min-width: 280px;
    width: 100%;
    height: 320px;
  }
  @media (min-width: 900px) {
    min-width: 280px;
    width: 100%;
    height: 330px;
  }
  @media (min-width: 1100px) {
    min-width: 280px;
    width: 100%;
    height: 400px;
  }
  &:hover{
    opacity: 0.6;
  }
`;

export const WrapperIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 20px;
`;
export const InfoTitle = styled.h3`
  color: ${(props) => props.color || "#fff"};
  margin: 0;
  @media (min-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    font-size: 26px;
  }
`;
export const InfoLink = styled(Link)`
  color: #c3c3c2;
  @media (min-width: 320px) {
    font-size: 15px;
  }
`;
