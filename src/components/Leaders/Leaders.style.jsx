import styled from "styled-components";

export const Box = styled.div`
  padding: 30px 0;
  background-color: #446fbd;
`;
export const Image = styled.img`
  border-radius: 20px;
  border: 5px solid white;
  filter: contrast(1.4);
  @media (min-width: 320px) {
    width: 96%;
    height: 280px;
  }
  @media (min-width: 400px) {
    width: 100%;
    height: 330px;
  }
  @media (min-width: 400px) {
    width: 270px;
    height: 330px;
  }
  @media (min-width: 600px) {
    width: 95%;
    height: 330px;
  }
`;
export const LeaderTitle = styled.h3`
  color: #fff;
  font-size: 40px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.div`
  margin-top: 10px;
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
