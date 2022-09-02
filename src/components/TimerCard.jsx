import {useEffect, useState} from 'react';
import useSound from 'use-sound';

import useStore from '../hooks/useStore';

import PauseIcon from './Icons/PauseIcon';
import PlayIcon from './Icons/PlayIcon';
import SetPauseIcon from './Icons/SetPauseIcon';
import StyledTimerCard from './StyledTimerCards';
import StyledSpan from './StyledTimerSpan';

export default function TimerCard({variant, minutes, seconds, running, onFinish}) {
	const [_minutes, setMinutes] = useState(minutes);
	const [_seconds, setSeconds] = useState(seconds);

	const timerOn = useStore(state => state.timerOn);
	const [beep] = useSound('/Sounds/beep3.mp3', {volume: 0.75});

	useEffect(() => {
		if (!running) return;
		const timer = setInterval(() => {
			if (timerOn) {
				if (_minutes === 0 && _seconds === 0) return;
				if (_minutes === 0 && _seconds === 1) {
					beep();
					onFinish();
					setSeconds(0);
				} else if (_seconds === 0) {
					setMinutes(_minutes - 1);
					setSeconds(59);
				} else {
					setSeconds(_seconds - 1);
				}
			} else {
				clearInterval(timer);
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [_minutes, _seconds, running, onFinish, timerOn, beep]);

	return (
		<StyledTimerCard
			variant={variant}
			finish={_minutes === 0 && _seconds === 0}
			running={running}
		>
			{' '}
			<p>{variant}</p>
			{_minutes > 0 || _seconds > 0 ? (
				<StyledSpan>
					{_minutes.toString().padStart(2, '0')}:{_seconds.toString().padStart(2, '0')}
				</StyledSpan>
			) : (
				'00:00'
			)}
			{variant === 'Exercise' ? (
				<PlayIcon />
			) : variant === 'Pause' ? (
				<PauseIcon />
			) : (
				<SetPauseIcon />
			)}
		</StyledTimerCard>
	);
}
