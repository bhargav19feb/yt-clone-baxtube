import React from 'react';
import styled from "styled-components";
import SideBarMenuItem from './SideBarMenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LogoImage from './LogoImage';

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const GrayLine =styled.div`
margin:0 0.2rem ;
height: 1px;
border-top:solid gray 1px;
`;
const Disclaimer =styled.div`
  color:#3c3c3c;
`;

const P =styled.p`
margin:0;
padding: 0;
font-size: 1.3em;

`

const SideBarItems = () => {
  return (
    <Container>
            <LogoImage />
          <SideBarMenuItem>
                <HomeIcon />
                <P>Home </P>
          </SideBarMenuItem> 
           <SideBarMenuItem>
                <ExploreOutlinedIcon />
                <P>Explore </P>
          </SideBarMenuItem> 
           <SideBarMenuItem>
                <SubscriptionsOutlinedIcon/>
                <P>Subscriptions </P>
          </SideBarMenuItem> 
           <SideBarMenuItem>
                <VideoLibraryOutlinedIcon />
                <P>Library </P>
          </SideBarMenuItem>
            <SideBarMenuItem>
                <HistoryOutlinedIcon />
                <P>History</P>
          </SideBarMenuItem> 
            <GrayLine />
           <SideBarMenuItem>
                <LibraryMusicOutlinedIcon />
                <P>Music </P>
          </SideBarMenuItem>  
           <SideBarMenuItem>
                <SportsBasketballOutlinedIcon />
                <P>Sports </P>
          </SideBarMenuItem>    
           <SideBarMenuItem>
                <SportsEsportsOutlinedIcon />
                <P>Gaming</P>
          </SideBarMenuItem>    
          <SideBarMenuItem>
                <MovieOutlinedIcon />
                <P>Movies </P>
          </SideBarMenuItem> 
          <SideBarMenuItem>
                <ArticleOutlinedIcon />
                <P>News</P>
          </SideBarMenuItem> 
          <SideBarMenuItem>
                <LiveTvOutlinedIcon />
                <P>Live </P>
          </SideBarMenuItem> 
            <GrayLine />

          <Disclaimer>© 2022 Google LLC</Disclaimer>
    </Container>
  )
}

export default SideBarItems