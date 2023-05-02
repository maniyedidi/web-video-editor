import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TimeText from './time-text';
import { getIsCropAndDuration, getStartEnd } from '@/redux/selectors';

const PART_COUNT = 6;

const getTimes = ({ start, end }) => {
  const duration = end - start;
  if (!duration) return [];

  const times = [];
  const gap = duration / PART_COUNT;

  let secs = 0;

  if (duration < 6) {
    for (let count = 0; count <= duration; count += 1) times.push(count);
    return times;
  }

  for (let count = 0; count <= PART_COUNT; count += 1) {
    times.push(Math.round(secs));
    secs += gap;
  }

  return times;
};

const TimeZone = () => {
  const originalVideo = useSelector(state => state.originalVideo);
  const { isCrop, duration } = useSelector(getIsCropAndDuration, shallowEqual);
  const { start, end } = useSelector(getStartEnd);

  const parameter = isCrop ? { start: 0, end: duration } : { start, end };
  const times = getTimes(parameter);

  useEffect(() => {
    console.log('originalVideo', originalVideo);
  }, [originalVideo]);

  return (
    <div>
      <div>
        {!!duration &&
          times.map(time => (
            <TimeText key={time} time={time} color={color.GRAY} />
          ))}
      </div>
    </div>
  );
};

export default TimeZone;
