import Link from 'next/link';
import {useEffect, useState} from 'react';

import PauseIcon from './Icons/PauseIcon';
import PlayIcon from './Icons/PlayIcon';
import SetPauseIcon from './Icons/SetPauseIcon';
import StyledCard from './StyledCards';

export default function TimerCard({variant, minutes, seconds, running, onFinish}) {
	const [_minutes, setMinutes] = useState(minutes);
	const [_seconds, setSeconds] = useState(seconds);

	useEffect(() => {
		if (!running) return;
		const bla = setInterval(() => {
			if (_minutes === 0 && _seconds === 0) {
				onFinish();
			} else if (_seconds === 0) {
				setMinutes(_minutes - 1);
				setSeconds(59);
			} else {
				setSeconds(_seconds - 1);
			}
		}, 1000);
		return () => clearInterval(bla);
	}, [_minutes, _seconds, running, onFinish]);

	return (
		<Link href="/exercise-form">
			<StyledCard
				variant={variant}
				finish={_minutes === 0 && _seconds === 0}
				running={running}
			>
				{variant === 'exercise' ? (
					<PlayIcon />
				) : variant === 'pause' ? (
					<PauseIcon />
				) : (
					<SetPauseIcon />
				)}

				{_minutes > 0 || _seconds > 0 ? (
					<a>
						{_minutes.toString().padStart(2, '0')}:
						{_seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
				<p>{variant}</p>
			</StyledCard>
		</Link>
	);
}
