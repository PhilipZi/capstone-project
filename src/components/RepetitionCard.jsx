import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCards from './StyledCards';

export default function RepetitionCard() {
	const repetitionCounter = useStore(state => state.repetitionCounter);
	const length = repetitionCounter.length;
	const lastRepetitionAmount = repetitionCounter[length - 1];
	return (
		<Link href="/repetition">
			<StyledCards variant="repetition">
				<RepetitionIcon />
				<p>Repetition</p>
				{lastRepetitionAmount ? (
					<a key={lastRepetitionAmount.id}>
						{lastRepetitionAmount.repetitionCounter.toString().padEnd(2, 'x')}
					</a>
				) : (
					'0x'
				)}
			</StyledCards>
		</Link>
	);
}
