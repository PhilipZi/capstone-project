import {useEffect, useState} from 'react';

import useStore from '../hooks/useStore';
export default function Timer() {
	const currentExercise = useStore(state => state.currentExercise);

	const minutesExercises = currentExercise.exercise.minutes;
	const secondsExercises = currentExercise.exercise.seconds;

	const [minutes, setMinutes] = useState(minutesExercises);
	const [seconds, setSeconds] = useState(secondsExercises);

	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			if (timerOn) {
				if (minutes === 0 && seconds === 0) {
					alert('time up');
				} else if (seconds === 0) {
					setMinutes(minutes - 1);
					setSeconds(59);
				} else {
					setSeconds(seconds - 1);
				}
			} else {
				clearInterval(timer);
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [minutes, seconds, timerOn]);

	return (
		<div>
			<div>
				<span>{minutes < 10 ? '0' + minutes : minutes}</span>
				<span>:</span>
				<span>{seconds < 10 ? '0' + seconds : seconds}</span>
			</div>
			<div>
				<button type="button" onClick={() => setTimerOn(true)}>
					START
				</button>
				<button type="button" onClick={() => setTimerOn(true)}>
					RESUME
				</button>
				<button type="button" onClick={() => setTimerOn(false)}>
					STOP
				</button>
				<button
					type="button"
					onClick={() => {
						setMinutes(1);
						setSeconds(10);
					}}
				>
					RESET
				</button>
			</div>
		</div>
	);
}
