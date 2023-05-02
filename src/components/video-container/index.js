import UploadArea from "./upload-video";
import { VideoPreview } from "./video-preview";

const VideoContainer = () => {
  return (
    <div className='bg-white '>
        <div> 
          <UploadArea/>            
        </div>
        <VideoPreview/>
    </div>
  );
};
export default VideoContainer;
