import Link from 'next/link';

import PauseIcon from './Icons/PauseIcon';
import PlayIcon from './Icons/PlayIcon';
import SetPauseIcon from './Icons/SetPauseIcon';
import StyledTimerCard from './StyledTimerCards';

export default function TimerCard({variant, minutes, seconds, running}) {
	return (
		<Link href="/exercise-form">
			<StyledTimerCard variant={variant} running={running}>
				{variant === 'exercise' ? (
					<PlayIcon />
				) : variant === 'pause' ? (
					<PauseIcon />
				) : (
					<SetPauseIcon />
				)}

				{minutes > 0 || seconds > 0 ? (
					<a>
						{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
				<p>{variant}</p>
			</StyledTimerCard>
		</Link>
	);
}
