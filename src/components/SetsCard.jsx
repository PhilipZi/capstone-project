import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCards from './StyledCards';

export default function SetsCard() {
	const setsCounter = useStore(state => state.setsCounter);
	const length = setsCounter.length;
	const lastsetsAmount = setsCounter[length - 1];
	return (
		<Link href="/sets">
			<StyledCards variant="sets">
				<RepetitionIcon />
				<p>Sets</p>
				{lastsetsAmount ? (
					<a key={lastsetsAmount.id}>
						{lastsetsAmount.setsCounter.toString().padEnd(2, 'x')}
					</a>
				) : (
					'0x'
				)}
			</StyledCards>
		</Link>
	);
}
