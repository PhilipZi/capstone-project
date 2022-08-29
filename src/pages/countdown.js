import {useMemo, useState} from 'react';

import DumbbellIcon from '../components/Icons/DumbbellIcon';
import StyledDumbbellIcon from '../components/Icons/StyledDumbbellIcon';
import MoveBackButton from '../components/MoveBackButton';
import NavigationBar from '../components/NavigationBar';
import {StyledHeader, StyledH1} from '../components/StyledHeader';
import StyledLayout from '../components/StyledLayout';
import StyledTimerCardsContainer from '../components/StyledTimerCardsContainer';
import TimerCard from '../components/TimerCard';
import useStore from '../hooks/useStore';

export default function TimerContainer() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentExercise = useStore(state => state.currentExercise);

	const timers = useMemo(() => {
		const _sets = [];
		for (let sets = 0; sets < currentExercise.sets; sets++) {
			for (let repition = 0; repition < currentExercise.repetition; repition++) {
				_sets.push({
					variant: 'Exercise',
					minutes: currentExercise.exercise.minutes,
					seconds: currentExercise.exercise.seconds,
				});
				if (
					repition < currentExercise.repetition - 1 &&
					(currentExercise.pause.minutes > 0 || currentExercise.pause.seconds > 0)
				) {
					_sets.push({
						variant: 'Pause',
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
					variant: 'Setpause',
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
			<StyledHeader variant="counter">
				<MoveBackButton />
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

			<StyledTimerCardsContainer>
				{timers.map((timer, idx) => (
					<TimerCard
						key={idx}
						variant={timer.variant}
						minutes={timer.minutes}
						seconds={timer.seconds}
						running={currentIndex === idx}
						onFinish={() => {
							setCurrentIndex(currentIndex + 1);
						}}
					/>
				))}
			</StyledTimerCardsContainer>
			<NavigationBar />
		</StyledLayout>
	);
}
