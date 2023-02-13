import React, { useState, useEffect } from 'react';

import { Text } from '@chakra-ui/react';

export default function Timer({ deadline }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now() + 75600000; // милисекунды

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return days + hours + minutes + seconds > 0 ? (
    <Text>
      {days < 1 ? '' : days + ' д. '}
      {hours < 1 ? '' : hours + ' ч. '}
      {minutes < 1 ? '' : minutes + ' мин. '}
      {seconds < 1 ? '' : seconds + ' сек. '}
    </Text>
  ) : days + hours + minutes + seconds === 0 ? (
    // <Skeleton h="24px" w="175px" />
    <Text>подсчет оставшегося времени...</Text>
  ) : (
    <Text>время вышло</Text>
  );
}
