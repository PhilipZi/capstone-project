import {useMemo} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import MoveBackButton from '../components/MoveBackButton';
import TimerCard from '../components/TimerCard';
import useStore from '../hooks/useStore';

export default function TimerContainer() {
	const currentExercise = useStore(state => state.currentExercise);

	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const timers = useMemo(() => {
		const _sets = [];
		for (let sets = 0; sets < currentExercise.sets; sets++) {
			for (let repition = 0; repition < currentExercise.repetition; repition++) {
				_sets.push({
					variant: 'exercise',
					minutes: currentExercise.exercise.minutes,
					seconds: currentExercise.exercise.seconds,
				});
				if (
					repition < currentExercise.repetition - 1 &&
					(currentExercise.pause.minutes > 0 || currentExercise.pause.seconds > 0)
				) {
					_sets.push({
						variant: 'pause',
						minutes: currentExercise.pause.minutes,
						seconds: currentExercise.pause.seconds,
					});
				} else '';
			}
			if (
				sets < currentExercise.sets - 1 &&
				(currentExercise.setPause.minutes > 0 || currentExercise.setPause.seconds > 0)
			) {
				_sets.push({
					variant: 'setpause',
					minutes: currentExercise.setPause.minutes,
					seconds: currentExercise.setPause.seconds,
				});
			} else '';
		}
		return _sets;
	}, [
		currentExercise.exercise.minutes,
		currentExercise.exercise.seconds,
		currentExercise.pause.minutes,
		currentExercise.pause.seconds,
		currentExercise.repetition,
		currentExercise.setPause.minutes,
		currentExercise.setPause.seconds,
		currentExercise.sets,
	]);

	useEffect(() => {
		setInterval(() => {
			if (minutes === 0 && seconds === 0) timers.unshift();
			else if (seconds === 0) {
				setMinutes(minutes - 1);
				setSeconds(59);
			} else {
				setSeconds(seconds - 1);
			}
		}, 1000);
		return () => clearInterval(timers);
	}, [minutes, seconds, timers]);

	return (
		<div>
			<MoveBackButton />
			{timers.map((timer, idx) => (
				<TimerCard
					key={idx}
					variant={timer.variant}
					minutes={idx === 0 ? minutes : timer.minutes}
					seconds={idx === 0 ? seconds : timer.seconds}
				/>
			))}
		</div>
	);
}
