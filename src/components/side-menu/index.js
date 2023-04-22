import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CollectionsIcon from '@mui/icons-material/Collections';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Home } from '@mui/icons-material';
import AccountMenu from '../account-menu';

const SideMenu = () => {
  return (
    <div className='p-2 flex  bg-white flex-col justify-between border-r-2 drop-shadow h-[calc(100vh-60px)]'>
      <div className='flex items-center flex-col pt-4'>
        <Button  startIcon={<AddIcon/>} size='large' variant='contained' color='primary'>
          New Video
        </Button>
        <List>
          <ListItem>
            <ListItemButton selected={true}>  
              <ListItemIcon>
                <Home color='primary' />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary='Templates' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary='Projects' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary='Assets' />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesomeIcon />
            </ListItemIcon>
            <ListItemText primary='Upgrade' />
          </ListItemButton>
        </ListItem>
        <ListItem>         
          <AccountMenu/>
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;
