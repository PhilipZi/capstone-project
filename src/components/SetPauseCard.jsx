import Link from 'next/link';

import useStore from '../hooks/useStore';

import SetPauseIcon from './Icons/SetPauseIcon';
import StyledCard from './StyledCards';

export default function SetPauseCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/setpause-form">
			<StyledCard variant="setpause">
				<SetPauseIcon />
				<p>Set Pause</p>
				{currentExercise.setPause ? (
					<a>
						{currentExercise.setPause.minutes.toString().padStart(2, '0')}:
						{currentExercise.setPause?.seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCard>
		</Link>
	);
}
