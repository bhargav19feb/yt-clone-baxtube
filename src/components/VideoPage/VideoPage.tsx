import Reac from 'react'
import styled from "styled-components";
import ReactPlayer from 'react-player/lazy';
import { useParams,useLocation } from "react-router-dom";
import {ThumbUpAlt,ThumbDownOffAlt,ShareSharp,Download,ContentCutOutlined} from '@mui/icons-material';

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 30px auto; 
`;
const PlayerContainer= styled(Container)`
margin:0 auto;
`;
const Title= styled.p`
  font-size: 20px;
  text-align: center;

`;
const IconHolder= styled.div`
width: 65%;
margin:5px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const BottomText= styled.p`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #6a6a6a;
    font-weight: 600;
    font-size: 18px;
`;
const Div= styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  gap:13px
`

const VideoPage = () => {
  const {videoId} = useParams<string>();
  const location  = useLocation();
  const {state} = location;

  
  return (
    <>
    <Container>
      <PlayerContainer>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls={true} width={900} height={506}/>
      </PlayerContainer>
       <Title>{state.title}</Title>
       <IconHolder>
          <BottomText>{Math.floor(Math.random()*98+1)} lakh views</BottomText>
          <Div>
            <ThumbUpAlt fontSize='medium'/>
            Like
          </Div>
          <Div>
            <ThumbDownOffAlt fontSize='medium' />DisLike 
          </Div>
          <Div>
            <ShareSharp fontSize='medium' /> Share 
          </Div>
          <Div>
            <Download fontSize='medium' />Download 
          </Div>
          <Div>
            <ContentCutOutlined fontSize='medium'/>
            Clip
          </Div>
       </IconHolder>
    </Container>

    </>
  )
}

export default VideoPage