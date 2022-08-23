import Link from 'next/link';

import useStore from '../hooks/useStore';

import PauseIcon from './Icons/PauseIcon';
import StyledCards from './StyledCards';

export default function PauseCard() {
	const pauseTimes = useStore(state => state.pauseTimes);
	const length = pauseTimes.length;
	const lastTime = pauseTimes[length - 1];
	return (
		<Link href="/pause">
			<StyledCards variant="pause">
				<PauseIcon />
				<p>Pause</p>
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
