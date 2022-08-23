import Link from 'next/link';

import useStore from '../hooks/useStore';

import PlayIcon from './Icons/PlayIcon';
import StyledCards from './StyledCards';

export default function ExerciseCard() {
	const exerciseTimes = useStore(state => state.exerciseTimes);
	const length = exerciseTimes.length;
	const lastTime = exerciseTimes[length - 1];
	return (
		<Link href="/exercise">
			<StyledCards variant="exercise">
				<PlayIcon />
				<p>Exercise</p>
				{lastTime ? (
					<a key={lastTime.id}>
						{lastTime.minutes.toString().padStart(2, '0')}:
						{lastTime?.seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCards>
		</Link>
	);
}
