import React, { useState, createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setVideo } from '@/redux/video.slice';

const UploadArea = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();


  const ref = createRef();

  const handleChange = () => {
    const localFile = ref.current?.files[0];
    const objectURL = URL.createObjectURL(localFile);
    dispatch(
      setVideo({ video: null, url: objectURL, name: localFile.name })
    );
    setVisible(false);
  };

  return (
    <div>
      <div>        
        <Button
          message='Upload'
          onClick={() => setVisible(!visible)}
          disabled={false}
        />
        <input ref={ref} type='file' onChange={handleChange} />
      </div>
    </div>
  );
};

export default UploadArea;
