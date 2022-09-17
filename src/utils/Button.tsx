import styled from "styled-components";

export const Button= styled.button`
    border: #3ea6ff solid 2px;
    cursor: pointer;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    column-gap: 5px;
    align-items: center;
    padding: 5px 8px;
    color: #3ea6ff;
    background-color: transparent;
    font-weight: 500;
    &:hover{
    background-color: #373737;
    };
    
`