import Header from '@/components/header';
import VSideMenu from '@/components/v-side-menu';
import VideoContainer from '@/components/video-container';
import VideoEditorTimeLine from '@/components/video-editor-timeline';

const VideoEditor = () => {
  return (
    <div className=''>
      <Header />
      <div className='grid grid-cols-[100px_1fr] '>
        <VSideMenu />
        <div className='bg-[#FDFBFC] p-4 flex flex-col gap-3'>
          <VideoContainer />
          <VideoEditorTimeLine />
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;
