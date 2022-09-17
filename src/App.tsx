import React from 'react';
import './App.css';
import styled from 'styled-components';
import MainContent from "./components/MainContentSection/MainContent";
import MainSection from "./components/MainContentSection/MainSection";
import VideoPage from './components/VideoPage/VideoPage';
import SideNavBar from "./components/SideNavBar/SideNavBar";
import SearchBar from './components/SearchBar/SearchBar';
import GlobalStyle from "./utils/GlobalStyle";
import {BrowserRouter,Route,Routes} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`


const App:React.FC = ()=>{
  return (
    <>
    <BrowserRouter>
        <GlobalStyle />
        <Container>
          <SideNavBar />
          <MainSection>
            <SearchBar />
                <Routes>
                    <Route path="/" >
                          <Route index element={<MainContent/>} />
                          <Route path="video" element={<VideoPage />}>
                            <Route path=":videoId" element={<VideoPage />} />
                          </Route>
                    </Route>
                </Routes>
          </MainSection>
        </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
