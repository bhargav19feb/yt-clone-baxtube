import React from 'react'
import styled from "styled-components"
import {IThumbNailProps} from "./../../interfaceUtils/IpropsInterface";
// import {getChannelDeets} from "./../../apiCallers/fetchers";
import Avatar from '@mui/material/Avatar';
import {Link,Outlet} from "react-router-dom";

const Card= styled.div`
width:23%;
margin-bottom:40px;
cursor: pointer;
`;
const ContainerText = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
/* align-items: center; */
gap: 5px;
margin-top: 10px;
`;

const ImgThumbNail= styled.img`
    width: 100%;
    height: 173px;
    background-color: gray ;
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

const ThumbNailCard :React.FC<IThumbNailProps> = ({title,videoId,publishTime,url,channelTitle,channelId}) => {
    function componentToHex(c:number) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    function rgbToHex(r:number, g:number, b:number) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    function RandomColorGen(){
        const [a,b,c]= [Math.trunc(Math.random()*256),Math.trunc(Math.random()*256),Math.trunc(Math.random()*256)];
        return rgbToHex(a,b,c);
    }
    // const [channelImgUrl,setChannelImgUrl]= useState<string>("");
    // const [loading,setLoading]=useState(true);
    // useEffect(()=>{
    //     getChannelDeets(channelId).then((data:{items:IChannelInfo[]})=>{
    //         const {snippet:{thumbnails:{default:{url}}}}:IChannelInfo= data.items[0];
    //         console.log(url);
    //         setChannelImgUrl(url);
    //         setLoading(false);
    //     }
    //     ).catch(e=>console.log(e));
    // });
    const slicedTitle= title.slice(0,50)+"...";
  return (
    <Card>
        <Link to={`/video/${videoId}`} style={{textDecoration:"none",color:"inherit"}} state={{title:title}}>
        <ImgThumbNail src={url} />
        <ContainerText>
        <Avatar sx={{ bgcolor: RandomColorGen() }}>{channelTitle[0].toUpperCase()}</Avatar>
        <ColumnContainer>
                    <Text>{slicedTitle}</Text>
                    <BottomText>{channelTitle}</BottomText>
                    <BottomText>{Math.trunc((Math.random()*98))+1}lakh views . {Math.trunc(Math.random())*28} days ago</BottomText>
            </ColumnContainer>      
        </ContainerText>
        </Link>
        <Outlet />
    </Card>
  )
}

export default ThumbNailCard