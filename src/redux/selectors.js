
// originalVideo
export const getName = state => state.originalVideo.name;
export const getInfo = state => {
  const { URL, length } = state.originalVideo;
  return { URL, length };
};
export const getFile = state => state.originalVideo.video;
export const getURL = state => state.originalVideo.URL;
export const getDuration = state => state.originalVideo.length;
export const getVisible = state => {
  const { message, URL } = state.originalVideo;
  return URL && !message;
};
export const getMessage = state => state.originalVideo.message;

// currentVideo
export const getPlaying = state => state.currentVideo.playing;
export const getCurrentTime = state => state.currentVideo.currentTime;
export const getStartEnd = state => {
  const { start, end } = state.currentVideo || {};
  return { start, end };
};
export const getThumbnails = state => state.currentVideo.thumbnails;
export const getIsCancel = state => {
  return state.currentVideo.isCancel;
};
export const getVolume = state => state.currentVideo.volume;
export const getVolumeLevel = state => Math.ceil(state.currentVideo.volume * 2);

// crop
export const getIsCrop = state => state.crop.isCrop;

export const getIsCropConfirm = state => state.crop.isCropConfirm;

export const getCropState = state => {
  const { isCrop } = state.crop;
  const { isCropConfirm } = state.crop;

  return {
    isCrop,
    isCropConfirm
  };
};
export const getIsCropAndDuration = state => {
  const { isCrop } = state.crop;
  const { length } = state.originalVideo;

  return {
    isCrop,
    duration: length
  };
};

// video
export const getVideos = state => state.video.videos;

// history
export const getIndexAndLogs = state => {
  const { index, logs } = state.history;
  return {
    index,
    logs
  };
};

export const getIsPrevDisabled = state => {
  const { index } = state.history;
  return index === 0;
};

export const getIsNextDisabled = state => {
  const { index, logs } = state.history;
  return index === logs.length;
};

export const getStatus = state => state.history.status;

export const getFilterStatus = state => {
  const { brightness, blur, grayscale } = state.history.filterStatus;
  return { brightness, blur, grayscale };
};
export const getRed = state => state.history.filterStatus.r;
export const getGreen = state => state.history.filterStatus.g;
export const getBlue = state => state.history.filterStatus.b;
export const getBrightness = state => state.history.filterStatus.brightness;
export const getBlur = state => state.history.filterStatus.blur;
export const getGrayscale = state => state.history.filterStatus.grayscale;
