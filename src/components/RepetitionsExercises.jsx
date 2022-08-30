import {useMemo} from 'react';

import useStore from '../hooks/useStore';

import ExerciseCard from './ExerciseCard';
import PauseCard from './PauseCard';

export default function RepetitionsExercises() {
	const currentExercise = useStore(state => state.currentExercise);

	const amountRepetitions = currentExercise.repetition;

	const exercises = useMemo(() => {
		const _exercises = [];
		for (let i = 0; i < amountRepetitions; i++) {
			_exercises.push(() => (
				<div>
					<ExerciseCard />
					{i < amountRepetitions - 1 &&
					(currentExercise.pause.minutes > 0 || currentExercise.pause.seconds > 0) ? (
						<PauseCard />
					) : (
						''
					)}
				</div>
			));
		}

		return _exercises;
	}, [amountRepetitions, currentExercise]);

	return (
		<div>
			{exercises.map((Block, idx) => (
				<Block key={idx} />
			))}
		</div>
	);
}
