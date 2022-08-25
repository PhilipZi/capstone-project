import Link from 'next/link';

import useStore from '../hooks/useStore';

import PauseIcon from './Icons/PauseIcon';
import StyledCard from './StyledCards';

export default function PauseCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/pause-form">
			<StyledCard variant="pause">
				<PauseIcon />
				<p>Pause</p>
				{currentExercise.pause ? (
					<a>
						{currentExercise.pause.minutes.toString().padStart(2, '0')}:
						{currentExercise.pause?.seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCard>
		</Link>
	);
}
