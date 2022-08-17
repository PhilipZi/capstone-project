import Link from 'next/link';

import PlayButton from '../../../public/Icons/playButton';

export default function ExerciseButton() {
	return (
		<button>
			<Link href="/exercisePage">
				<div>
					<PlayButton />
					<p>Exercise</p>
					<span>configurated time should be here</span>
				</div>
			</Link>
		</button>
	);
}
