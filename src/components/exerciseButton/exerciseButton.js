import Link from 'next/link';

import PlayIcon from '../../../public/Icons/playIcon';
import useStore from '../../hooks/useStore';

import StyledDiv from './styledDiv';
import StyledExerciseButton from './styledExerciseButton';

export default function ExerciseButton() {
	const exerciseTimes = useStore(state => state.exerciseTimes);
	const length = exerciseTimes.length;
	const lastTime = exerciseTimes[length - 1];

	return (
		<StyledExerciseButton>
			<Link href="/exerciseFormPage">
				<StyledDiv>
					<PlayIcon />
					<p>Exercise</p>
					{lastTime ? (
						<a key={lastTime.id}>
							{lastTime.minutes.toString().padStart(2, '0')}:
							{lastTime?.seconds.toString().padStart(2, '0')}
						</a>
					) : (
						'00:00'
					)}
				</StyledDiv>
			</Link>
		</StyledExerciseButton>
	);
}
