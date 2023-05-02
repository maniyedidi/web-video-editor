import { setVideoDuration } from '@/redux/video.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const VideoPreview = () => {
  const originalVideo = useSelector(state => state.originalVideo);

  const dispatch = useDispatch();

  useEffect(() => {
    const { url } = originalVideo || {};
    if (url) {
      previewVideo(url);
    }
  }, [originalVideo]);

  const previewVideo = async src => {
    const source = document.createElement('video');
    source.crossOrigin = 'anonymous';
    source.muted = true;
    source.src = src;    
    await source.play();
    console.clear();
    const player = document.createElement('video');
    player.muted = true;
    const output = document.getElementById('output');
    const ctx = output.getContext('2d');

    const stream =
      (source.captureStream && source.captureStream()) ||
      source.mozCaptureStream();

    player.addEventListener(
      'loadedmetadata',
      evt => {
        debugger;
        dispatch(setVideoDuration(source.duration));

        output.width = 700;
        output.height = 400;
        requestAnimationFrame(loop);
      },
      { once: true }
    );
    player.srcObject = stream;
    player.play();

    function loop() {
      ctx.drawImage(player, 0, 0);
      if (!source.paused) {
        requestAnimationFrame(loop);
      }
    }
  };

  return (
    <div>
      <div className='text-center'>
        <canvas className='bg-black' id='output'></canvas>
      </div>
    </div>
  );
};
