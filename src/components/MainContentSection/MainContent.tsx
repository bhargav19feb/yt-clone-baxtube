import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {IProps,IVideoCard} from "./../../interfaceUtils/IpropsInterface";
import ThumbNailCard from './ThumbNailCard';
import {getRandomVideos} from "./../../apiCallers/fetchers";
import {ColorRing} from "react-loader-spinner";
import DummyCard from "./DummyCard";


const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top:30px;
`;


const MainContent:React.FC<IProps> = ({children}) => {
    const Spinner=<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>;

    const [videoDeets,setVideoDeets] = useState<IVideoCard[]>([]);
    useEffect(()=>{
      getRandomVideos()
      .then((data)=>{
        const vidoesOp:IVideoCard[]= data.items;
        let l:number=Math.floor(vidoesOp.length/4);
        setVideoDeets(vidoesOp.slice(0,l*4));
      }).catch(e=>console.log(e));
      
    },[]);
  return (
    <Container>
      {videoDeets?videoDeets.map((item:IVideoCard)=><ThumbNailCard key={item.id.videoId} videoId={item.id.videoId} 
      title={item.snippet.title}
      url={item.snippet.thumbnails.medium.url}
      channelTitle={item.snippet.channelTitle}
      channelId={item.snippet.channelId}
      publishTime={item.snippet.publishTime}
      />):Spinner}
      {/* <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard /> */}

    </Container>
  )
}

export default MainContent