import Link from 'next/link';

import PlayButton from '../../../public/Icons/playButton';
import useStore from '../../hooks/useStore';

import StyledButton from './styledButton';
import StyledDiv from './styledDiv';

export default function ExerciseButton() {
	const times = useStore(state => state.times);
	console.log(times);
	const length = times.length;
	const lastTime = times[length - 1];

	return (
		<StyledButton>
			<Link href="/exercisePage">
				<StyledDiv>
					<PlayButton />
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
		</StyledButton>
	);
}
