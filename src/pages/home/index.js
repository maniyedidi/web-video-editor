import Header from '@/components/header';
import SideMenu from '@/components/side-menu';
import {
  Add,
  CollectionsOutlined,
  VideoCall,
  VideoCameraFrontOutlined
} from '@mui/icons-material';
import { Chip, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=''>
      <Header />
      <div className='grid grid-cols-[240px_1fr] '>
        <SideMenu />
        <div className='bg-[#FDFBFC] p-4 flex flex-col gap-3'>
          <div className='flex flex-row gap-5'>
            <Chip
              variant='outlined'
              className='px-2'
              icon={<Add />}
              label='Start from scratch'
            />
            <Chip
              variant='outlined'
              className='px-2'
              icon={<CollectionsOutlined />}
              label='Start from templates'
            />
            <Chip
              variant='outlined'
              className='px-2'
              icon={<VideoCall />}
              label='Start a recording'
            />
            <Chip
              variant='outlined'
              className='px-2'
              icon={<VideoCameraFrontOutlined />}
              label='Request a recording'
            />
          </div>
          <div className='p-5 border border-solid border-indigo-600 bg-[#FDFBFC]'>
            <div>Trending from VMaker</div>
            <div className='flex flex-row gap-1'></div>
          </div>

          <Tabs value={value} onChange={handleChange}>
            <Tab label='Recently edited' />
            <Tab label='Team  activities' />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
