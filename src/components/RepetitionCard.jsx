import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCard from './StyledCards';

export default function RepetitionCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/repetition-form">
			<StyledCard variant="repetition">
				<RepetitionIcon />
				<p>Repetition</p>
				{currentExercise.repetition ? (
					<a>{currentExercise.repetition.toString().padEnd(2, 'x')}</a>
				) : (
					'0x'
				)}
			</StyledCard>
		</Link>
	);
}
