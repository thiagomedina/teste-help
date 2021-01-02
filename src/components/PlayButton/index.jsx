import React, { useState, useEffect } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import { Button } from './styles';

const PlayButton = ({ url }) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  });

  return (
    <Button onClick={handlePlay}>
      {playing ? <FiPause /> : <FiPlay />}
    </Button>
  );
};

export default PlayButton;
