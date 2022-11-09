import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button)`
  color: white;
  margin: 0.5em;
  padding-right: 2em;
  padding-left: 2em;
  border-radius: 25px;
  background-color: #673ab7;
  :hover {
    background-color: #9575cd;
  }
`;

export default CustomizedButton;
