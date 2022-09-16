import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className="hidden lg:flex 2xl:flex items-center justify-end w-1/4 lg:w-1/3">
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} onClick={() => setVolume(0)} />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} onClick={() => setVolume(0)} />}
    {value === 0 && <BsFillVolumeMuteFill size={25} onClick={() => setVolume(1)} />}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
  </div>
);

export default VolumeBar;