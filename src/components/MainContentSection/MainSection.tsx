import React from 'react';
import styled from 'styled-components';
import {IProps} from "./../../interfaceUtils/IpropsInterface";
const Main = styled.div`
background-color: #181818;
color: white;
flex:7
`;



const MainSection:React.FC<IProps> = ({children}) => {

  return (
   <Main>
        {children}
   </Main>
  )
}

export default MainSection