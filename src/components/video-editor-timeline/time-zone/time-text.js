import { parseTime } from '@/utils/time';
import React from 'react';

const TimeText = ({ time, color }) => {
  return <p color={color}>{parseTime(time)}</p>;
};

export default TimeText;
