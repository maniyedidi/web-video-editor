import { useSelector } from 'react-redux';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TimeZone from './time-zone';

const VideoEditorTimeLine = () => {
  const originalVideo = useSelector(state => state.originalVideo);
  const { name } = originalVideo;

  return (
    <div className='flex flex-row h-[120px] w-full'>
      <div className='bg-red'>
        <SmartDisplayIcon
          color='primary'
          sx={{
            fontSize: 120
          }}
        />
        {name}
      </div>
      <div className='bg-black w-full'>
        <TimeZone/>
      </div>
    </div>
  );
};
export default VideoEditorTimeLine;
