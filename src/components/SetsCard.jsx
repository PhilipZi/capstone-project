import Link from 'next/link';

import useStore from '../hooks/useStore';

import RepetitionIcon from './Icons/RepetitionIcon';
import StyledCards from './StyledCards';

export default function SetsCard() {
	const currentExercise = useStore(state => state.currentExercise);

	return (
		<Link href="/sets">
			<StyledCards variant="sets">
				<RepetitionIcon />
				<p>Sets</p>
				{currentExercise.sets ? (
					<a>{currentExercise.sets.toString().padEnd(2, 'x')}</a>
				) : (
					'0x'
				)}
			</StyledCards>
		</Link>
	);
}
