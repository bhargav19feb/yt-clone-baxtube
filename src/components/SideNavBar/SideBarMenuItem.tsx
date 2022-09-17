import react from "react";
import styled from "styled-components";
import {IProps} from "./../../interfaceUtils/IpropsInterface";

const Item = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
    &:hover{
        background-color: #373737;
    }
`;

const SideBarMenuItem:React.FC<IProps> = ({children}) => {
  return (
        <Item>
           {children}
        </Item>
  )
}

export default SideBarMenuItem 