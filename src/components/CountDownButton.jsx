import Link from 'next/link';

import PlayIconMain from './Icons/PlayIconMain';
import StyledButton from './StyledButtons';

export default function CountDownButton() {
	return (
		<Link href="countdown">
			<a>
				<StyledButton variant="plus">
					<PlayIconMain />
				</StyledButton>
			</a>
		</Link>
	);
}
