import Head from 'next/head';
import {useMemo} from 'react';

import ExerciseCard from '../components/ExerciseCard';
import MoveBackButton from '../components/MoveBackButton';
import PauseCard from '../components/PauseCard';
import useStore from '../hooks/useStore';
export default function CountDown() {
	const currentExercise = useStore(state => state.currentExercise);

	const numElements = currentExercise.repetition;

	const exercises = useMemo(() => {
		const _exercises = [];
		for (let i = 0; i < numElements; i++) {
			numElements === 0 ? (
				<ExerciseCard />
			) : (
				_exercises.push(() => (
					<div>
						<ExerciseCard />
						{i < numElements - 1 &&
						(currentExercise.pause.minutes > 0 || currentExercise.pause.seconds > 0) ? (
							<PauseCard />
						) : (
							''
						)}
					</div>
				))
			);
		}

		return _exercises;
	}, [numElements, currentExercise]);

	return (
		<>
			<Head>
				<title key="title">Count Down</title>
				<meta key="description" name="description" content="count down" />
			</Head>
			<MoveBackButton />

			<div>
				{exercises.map((Block, idx) => (
					<Block key={idx} />
				))}
			</div>
		</>
	);
}
