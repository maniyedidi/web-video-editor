import Header from '@/components/header';
import {
  Add,
  CollectionsOutlined,
  VideoCall,
  VideoCameraFrontOutlined
} from '@mui/icons-material';
import { Chip } from '@mui/material';
import VSideMenu from '@/components/v-side-menu';
import VideoEditorTimeLine from '@/components/video-editor-timeline';

const VideoEditor = () => {
  return (
    <div className=''>
      <Header />
      <div className='grid grid-cols-[100px_1fr] '>
        <VSideMenu />
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
          <VideoEditorTimeLine />
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;
