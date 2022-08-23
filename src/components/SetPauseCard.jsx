import Link from 'next/link';

import useStore from '../hooks/useStore';

import SetPauseIcon from './Icons/SetPauseIcon';
import StyledCards from './StyledCards';

export default function SetPauseCard() {
	const setPauseTimes = useStore(state => state.setPauseTimes);
	const length = setPauseTimes.length;
	const lastTime = setPauseTimes[length - 1];
	return (
		<Link href="/setpause">
			<StyledCards variant="setpause">
				<SetPauseIcon />
				<p>Set Pause</p>
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
