import react from "react";
import styled from "styled-components";
import { Button } from "../../utils/Button";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey } from '@mui/material/colors';
import MicIcon from '@mui/icons-material/Mic';

const Container = styled.div`
  /* position: sticky;
  top:0; */
  background-color: #212121;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px 15px;
`;
const SignInWrapper = styled.div`
  flex:1;
  justify-content: flex-end;
  align-items: center;
`;
const SearchBarPartOne= styled.div`
  flex: 11;
  padding: 5px 8px;
  justify-content: center;
`;
const SearchIconBgm = styled(Button)`
padding-left:20px ;
padding-right:20px ;
  border: #6a6a6a solid 0px;
  border-left:none ;
border-radius: 3px;
background-color: #313131;
`;
const MicIconBgm = styled(Button)`
  border: #000 solid 0px;
border-radius: 50%;
background-color: black;
margin-left: 1rem;

`;
const ButtonText= styled.p`
  font-weight: 400;
  margin: 0;
  padding: 0;
  /* font-size: 1.2rem; */
`


const SearchTile= styled.input`
border: #373737 solid 0px;
border-radius: 3px;
background-color: black;
padding: 11px 10px;
width: 40%;
color: white;
::placeholder{
        color: #6a6a6a;
        font-size: medium;
    };

`;

const SearchAndRunBorder= styled.div`
display:flex;
flex-direction: row;
justify-content: center;
`;

const SearchBar = () => {
  return (
  <Container>
    <SearchBarPartOne>
      <SearchAndRunBorder>
          <SearchTile placeholder="Search">
          </SearchTile>
          <SearchIconBgm>
            <SearchIcon color="primary" />
          </SearchIconBgm>
          <MicIconBgm>
          <MicIcon sx={{ color: blueGrey[100] }} />
          </MicIconBgm>
      </SearchAndRunBorder>
    </SearchBarPartOne>
    <SignInWrapper>
      <Button onClick={()=>console.log("hi there")}>
        <AccountCircle />
        <ButtonText>  SIGN IN</ButtonText>
      </Button>
    </SignInWrapper>

  </Container>
  )
}

export default SearchBar