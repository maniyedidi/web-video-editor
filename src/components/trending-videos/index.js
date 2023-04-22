import sampleImage01 from '@/assets/videos/01.jpg';
import sampleImage02 from '@/assets/videos/02.jpeg';
import sampleImage03 from '@/assets/videos/03.jpeg';
import VideoPreview from '../video-preview';

const TrendingVideos = () => {
  return (
    <div className='p-5 border border-solid border-indigo-600 bg-[#FDFBFC]'>
      <h1 className='mb-4'>Trending from VMaker</h1>
      <div className='flex flex-row gap-3'>
        <VideoPreview
          title='Happy birth day'
          imgSrc={sampleImage01}
          videoSrc={'01.mp4'}
        />
        <VideoPreview
          title='Event'
          imgSrc={sampleImage02}
          videoSrc={'01.mp4'}
        />
        <VideoPreview
          title='Presentation'
          imgSrc={sampleImage03}
          videoSrc={'01.mp4'}
        />
        <VideoPreview
          title='Good work individual'
          imgSrc={sampleImage02}
          videoSrc={'01.mp4'}
        />
      </div>
    </div>
  );
};
export default TrendingVideos
