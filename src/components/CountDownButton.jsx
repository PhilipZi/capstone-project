import Link from 'next/link';

import PlayIconMain from './Icons/PlayIconMain';

export default function CountDownButton() {
	return (
		<Link href="exercise">
			<a>
				<PlayIconMain />
			</a>
		</Link>
	);
}
