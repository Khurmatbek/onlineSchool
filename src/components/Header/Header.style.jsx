import styled from "styled-components";

export const HeaderBox = styled.header`
  padding: 25px 0;
  background-color: #0b4ba8;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`;
export const Links = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  @media (min-width: 320px) {
    font-size: 14px;
  }
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;
export const Img = styled.img`
  filter: brightness(100);
`;
