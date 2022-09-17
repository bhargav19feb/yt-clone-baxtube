import React from 'react';
import styled from 'styled-components';
import {IProps} from "../../interfaceUtils/IpropsInterface";
import SideBarItems from './SideBarItems';

const Navbar = styled.div`
flex: 1;
background-color: #212121;
color: white;
position: sticky;
top:0;
padding: 1.2rem 1rem;
  height: 100vh;

&:hover{
  overflow-y: scroll;
}
`;


const SideNavBar:React.FC<IProps> = ({children}) => {
  return (
    <Navbar>
        <SideBarItems />
    </Navbar>
  )
}

export default SideNavBar