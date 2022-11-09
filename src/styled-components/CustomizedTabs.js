import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';

const CustomizedTabs = styled(Tabs)`
  & .MuiTabs-scroller {
    & .MuiTabs-indicator {
      background-color: #673ab7;
    }
    & .MuiTabs-flexContainer {
      & .MuiTab-root {
        color: white;
      }
      & .Mui-selected {
        color: #673ab7;
      }
    }
  }
`;

export default CustomizedTabs;
