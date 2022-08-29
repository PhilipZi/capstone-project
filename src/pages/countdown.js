import {useMemo} from 'react';

import DumbbellIcon from '../components/Icons/DumbbellIcon';
import StyledDumbbellIcon from '../components/Icons/StyledDumbbellIcon';
import MoveBackButton from '../components/MoveBackButton';
import {StyledHeader, StyledH1} from '../components/StyledHeader';
import StyledLayout from '../components/StyledLayout';
import TimerCard from '../components/TimerCard';
import useStore from '../hooks/useStore';

export default function TimerContainer() {
	const currentExercise = useStore(state => state.currentExercise);

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
				}
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
			}
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

	return (
		<StyledLayout>
			<MoveBackButton />
			<StyledHeader>
				<StyledH1>
					<StyledDumbbellIcon>
						<DumbbellIcon />
					</StyledDumbbellIcon>
					Your Workout
					<StyledDumbbellIcon variant="rotated">
						<DumbbellIcon />
					</StyledDumbbellIcon>
				</StyledH1>
			</StyledHeader>

			<div>
				{timers.map((timer, idx) => (
					<TimerCard
						key={idx}
						variant={timer.variant}
						minutes={timer.minutes}
						seconds={timer.seconds}
					/>
				))}
			</div>
		</StyledLayout>
	);
}
