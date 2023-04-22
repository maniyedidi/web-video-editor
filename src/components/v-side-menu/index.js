import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CollectionsIcon from '@mui/icons-material/Collections';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import { useRouter } from 'next/router';

const VSideMenu = () => {
  const router = useRouter();
  return (
    <div className='flex  bg-white flex-col justify-between border-r-2 drop-shadow h-[calc(100vh-60px)]'>
      <div className='flex items-center flex-col pt-4'>
        <List>
          <ListItem>
            <ListItemButton className='flex flex-col items-center'>
              <ListItemIcon style={{ minWidth: 'auto' }}>
                <VideoSettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Edit' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className='flex flex-col items-center'>
              <ListItemIcon style={{ minWidth: 'auto' }}>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary='Templates' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className='flex flex-col items-center'>
              <ListItemIcon style={{ minWidth: 'auto' }}>
                <FormatColorFillOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Styles' />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default VSideMenu;
