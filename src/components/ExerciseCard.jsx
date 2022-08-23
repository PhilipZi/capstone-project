import Link from 'next/link';

import useStore from '../hooks/useStore';

import PlayIcon from './Icons/PlayIcon';
import StyledCard from './StyledCards';

export default function ExerciseCard() {
	const exerciseTimes = useStore(state => state.exerciseTimes);
	const length = exerciseTimes.length;
	const lastTime = exerciseTimes[length - 1];
	return (
		<Link href="/exercise-form">
			<StyledCard variant="exercise">
				<PlayIcon />
				<span>Exercise</span>
				{lastTime ? (
					<a key={lastTime.id}>
						{lastTime.minutes.toString().padStart(2, '0')}:
						{lastTime?.seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCard>
		</Link>
	);
}
