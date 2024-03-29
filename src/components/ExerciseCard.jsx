import Link from 'next/link';

import useStore from '../hooks/useStore';

import PlayIcon from './Icons/PlayIcon';
import StyledCard from './StyledCards';
import StyledTextCards from './StyledTextCards';

export default function ExerciseCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/exercise-form">
			<StyledCard variant="exercise">
				<PlayIcon />
				<StyledTextCards>Exercise</StyledTextCards>
				{currentExercise ? (
					<a>
						{currentExercise.exercise.minutes.toString().padStart(2, '0')}:
						{currentExercise?.exercise.seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCard>
		</Link>
	);
}
