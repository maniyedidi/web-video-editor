import Image from 'next/image';

const VideoPreview = ({ imgSrc, videoSrc, title }) => {
  return (
    <div className='flex flex-col gap-1 group'>
      <Image src={imgSrc} className='w-[220px] h-[120px] group-hover:hidden' />

      <video
        className='hidden w-[220px] h-[120px]  group-hover:block'
        autoPlay
        muted
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <h3 className='m-0 text-center'>{title}</h3>
    </div>
  );
};
export default VideoPreview;
