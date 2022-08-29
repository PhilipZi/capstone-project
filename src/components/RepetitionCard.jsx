import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCard from './StyledCards';
import StyledPCards from './StyledPCards';

export default function RepetitionCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/repetition-form">
			<StyledCard variant="repetition">
				<RepetitionIcon />
				<StyledPCards>Repetition</StyledPCards>
				{currentExercise.repetition ? (
					<a>{currentExercise.repetition.toString().padEnd(2, 'x')}</a>
				) : (
					'0x'
				)}
			</StyledCard>
		</Link>
	);
}
