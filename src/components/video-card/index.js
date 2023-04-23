import Image from 'next/image';
import { Button } from '@mui/material';

const VideoCard = ({ title, src }) => {
  return (
    <div className='bg-white drop-shadow border-tl-[50px] border-solid  border-4 hover:border-sky-500  border-white'>
      <Image src={src} className='w-[400px] h-[240px]' alt={title} />
      <h3 className='pl-2'>{title}</h3>
      <div className='flex flex-row justify-between px-2 items-center mb-3'>
        <div className='text-[#8085a3]'>
          <span>Daft .</span>
          <span>Edited 10 mins Ago</span>
        </div>

        <Button variant='text'>Edit</Button>
      </div>
    </div>
  );
};
export default VideoCard;
