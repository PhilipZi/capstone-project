import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCard from './StyledCards';
import StyledPCards from './StyledPCards';

export default function SetsCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/sets-form">
			<StyledCard variant="sets">
				<RepetitionIcon />
				<StyledPCards>Sets</StyledPCards>
				{currentExercise.sets ? (
					<a>{currentExercise.sets.toString().padEnd(2, 'x')}</a>
				) : (
					'0x'
				)}
			</StyledCard>
		</Link>
	);
}
