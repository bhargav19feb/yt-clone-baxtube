import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import {IThumbNailProps,IChannelInfo} from "./../../interfaceUtils/IpropsInterface";
import Avatar from '@mui/material/Avatar';
import {Link,Outlet} from "react-router-dom"

const Card= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width:23%;
margin-bottom:40px;
cursor: pointer;
row-gap: 10px;
`;
const ContainerText = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
/* align-items: center; */
gap: 20px;
`;

const ImgThumbNail= styled.img`
    width: 100%;
    height: 173px;
    background-color: gray ;
    margin-bottom: 10px;
`
const Text= styled.p`
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto","Arial",sans-serif;
    color: #efefef;
    text-align: left;
    font-size: 15px;
    line-height: 1.2rem;
    font-weight: 570;
    margin-bottom: 2px;
`;

const ColumnContainer= styled.div`
    display: flex;
    flex-direction: column;
    /* row-gap:10px ; */
    justify-content: center;
    align-items: flex-start;
`;
const BottomText= styled.p`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #6a6a6a;
    font-weight: 600;
    font-size: 12px;
`;



const ThumbNailCard :React.FC = () => {
    const videoId="FHTbsZEJspU";
    const title= "Backstreet Boys - Everybody (Backstreet's Back) (Official HD Video)".slice(0,50)+"...";
  return (
    <>
    <Card>
    <Link to={`/video/${videoId}`} style={{textDecoration:"none",color:"inherit"}} state={{title:title}} >
        <ImgThumbNail  />
            <ContainerText>
                <Avatar>H</Avatar>
                <ColumnContainer>
                    <Text>{title}</Text>
                    <BottomText>MrWhosetheboss</BottomText>
                    <BottomText>2.4lakh views . 2 days ago</BottomText>
                </ColumnContainer>
            </ContainerText>
    </Link>
    </Card>
    <Outlet />
    </>
  )
}

export default ThumbNailCard