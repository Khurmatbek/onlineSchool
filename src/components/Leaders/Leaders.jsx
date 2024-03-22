import { Container } from "../../styles/ContainerStyle";
import leader from "../../../public/8-maktab.jpeg";
import React from "react";
import Slider from "react-slick";
import { FaUserGraduate } from "react-icons/fa";
import { Shool_Leaders } from "../../../db/db";
import { Box, Div, Image, LeaderTitle, Name } from "./Leaders.style";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: false,
  focus:false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Leaders = () => {
  return (
    <Box>
      <Container>
        <LeaderTitle>
          Iqtidorli o'quvchilar...
          <FaUserGraduate />
        </LeaderTitle>
        <Slider {...settings}>
          {Shool_Leaders.map((item) => {
            return (
              <Div key={item.id}>
                <Image src={item.image} width={300} height={330} alt="image" />
                <Name>{item.fullName}</Name>
              </Div>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
};

export default Leaders;
