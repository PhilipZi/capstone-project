import Link from 'next/link';

import PauseIcon from './Icons/PauseIcon';
import PlayIcon from './Icons/PlayIcon';
import SetPauseIcon from './Icons/SetPauseIcon';
import StyledCard from './StyledCards';

export default function TimerCard({variant, minutes, seconds}) {
	return (
		<Link href="/exercise-form">
			<StyledCard variant={variant}>
				{variant === 'exercise' ? (
					<PlayIcon />
				) : variant === 'pause' ? (
					<PauseIcon />
				) : (
					<SetPauseIcon />
				)}
				<p>{variant}</p>
				{minutes > 0 && seconds > 0 ? (
					<a>
						{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
					</a>
				) : (
					'00:00'
				)}
			</StyledCard>
		</Link>
	);
}
