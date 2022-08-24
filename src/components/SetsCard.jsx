import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCard from './StyledCards';

export default function SetsCard() {
	const setsCounter = useStore(state => state.setsCounter);
	const length = setsCounter.length;
	const lastsetsAmount = setsCounter[length - 1];
	return (
		<Link href="/sets-form">
			<StyledCard variant="sets">
				<RepetitionIcon />
				<span>Sets</span>
				{lastsetsAmount ? (
					<a key={lastsetsAmount.id}>
						{lastsetsAmount.setsCounter.toString().padEnd(2, 'x')}
					</a>
				) : (
					'0x'
				)}
			</StyledCard>
		</Link>
	);
}
