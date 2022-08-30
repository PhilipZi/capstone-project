import Link from 'next/link';

import PlayIconMain from './Icons/PlayIconMain';

export default function CountDownButton() {
	return (
		<Link href="countdown">
			<a>
				<PlayIconMain />
			</a>
		</Link>
	);
}
