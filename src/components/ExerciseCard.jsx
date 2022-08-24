import Link from 'next/link';

import useStore from '../hooks/useStore';

import PlayIcon from './Icons/PlayIcon';
import StyledCards from './StyledCards';

export default function ExerciseCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/exercise">
			<StyledCards variant="exercise">
				<PlayIcon />
				<p>Exercise</p>
				{currentExercise ? (
					<a>
						{currentExercise.exercise.minutes.toString().padStart(2, '0')}:
						{currentExercise?.exercise.seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCards>
		</Link>
	);
}
