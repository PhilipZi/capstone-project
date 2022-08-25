import Link from 'next/link';

import useStore from '../hooks/useStore';

import SetPauseIcon from './Icons/SetPauseIcon';
import StyledCard from './StyledCards';

export default function SetPauseCard() {
	const setPauseTimes = useStore(state => state.setPauseTimes);
	const length = setPauseTimes.length;
	const lastTime = setPauseTimes[length - 1];
	return (
		<Link href="/setpause-form">
			<StyledCard variant="setpause">
				<SetPauseIcon />
				<span>Set Pause</span>
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
