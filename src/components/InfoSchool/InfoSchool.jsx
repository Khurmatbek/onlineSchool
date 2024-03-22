
import { Container } from "../../styles/ContainerStyle";
import online_lesson from "../../../public/onlinedars.jpeg";
import tadbirlar from "../../../public/tadbirlar.jpeg";
import school from "../../../public/tadbirlar.jpg";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GiNewspaper } from "react-icons/gi";
import { GiArchiveRegister } from "react-icons/gi";
import {
  Box,
  Img,
  InBox,
  InfoLink,
  InfoTitle,
  ItemInfo,
  ListInfo,
  WrapperIn,
} from "./InfoSchoolStyle";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import "./InfoSchool.css";
import React from "react";
import { Image, Space } from "antd";


const InfoSchool = () => {
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  return (
    <Box>
      <Container>
        <ListInfo>
          <ItemInfo>
            <InBox $start={"start"}>
              <GiArchiveRegister color="#fff" fontSize={50} />
              <WrapperIn>
                <InfoTitle>Maktab hayoti</InfoTitle>
                <InfoLink to={"/"}>Batafsil ma'lumot </InfoLink>
              </WrapperIn>
            </InBox>

            <Image
              className="image"
              width={280}
              src={school}
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: {
                      onFlipY,
                      onFlipX,
                      onRotateLeft,
                      onRotateRight,
                      onZoomOut,
                      onZoomIn,
                    },
                  }
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <DownloadOutlined onClick={onDownload} />
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined
                      disabled={scale === 1}
                      onClick={onZoomOut}
                    />
                    <ZoomInOutlined
                      disabled={scale === 50}
                      onClick={onZoomIn}
                    />
                  </Space>
                ),
              }}
            />
          </ItemInfo>
          <ItemInfo>
            <InBox>
              <GoDeviceCameraVideo color="#fff" fontSize={50} />
              <WrapperIn>
                <InfoTitle>Online darslar</InfoTitle>
                <InfoLink to={"/about"}>Batafsil ma'lumot</InfoLink>
              </WrapperIn>
            </InBox>
            <Image
              width={280}
              className="image"
              src={online_lesson}
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: {
                      onFlipY,
                      onFlipX,
                      onRotateLeft,
                      onRotateRight,
                      onZoomOut,
                      onZoomIn,
                    },
                  }
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <DownloadOutlined onClick={onDownload} />
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined
                      disabled={scale === 1}
                      onClick={onZoomOut}
                    />
                    <ZoomInOutlined
                      disabled={scale === 50}
                      onClick={onZoomIn}
                    />
                  </Space>
                ),
              }}
            />
          </ItemInfo>
          <ItemInfo>
            <InBox $start={"end"}>
              <GiNewspaper color="#fff" fontSize={50} />
              <WrapperIn>
                <InfoTitle>Tadbirlar</InfoTitle>
                <InfoLink to={"/about"}>Batafsil ma'lumot</InfoLink>
              </WrapperIn>
            </InBox>

            <Image
               width={280}
              className="image"
              src={tadbirlar}
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: {
                      onFlipY,
                      onFlipX,
                      onRotateLeft,
                      onRotateRight,
                      onZoomOut,
                      onZoomIn,
                    },
                  }
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <DownloadOutlined onClick={onDownload} />
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined
                      disabled={scale === 1}
                      onClick={onZoomOut}
                    />
                    <ZoomInOutlined
                      disabled={scale === 50}
                      onClick={onZoomIn}
                    />
                  </Space>
                ),
              }}
            />
          </ItemInfo>
        </ListInfo>
      </Container>
    </Box>
  );
};
export default InfoSchool;
