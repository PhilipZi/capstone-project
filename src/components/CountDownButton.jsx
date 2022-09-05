import Link from 'next/link';

import useStore from '../hooks/useStore';

import PlayIconMain from './Icons/PlayIconMain';
import StyledButton from './StyledButtons';

export default function CountDownButton() {
	const changeToFalse = useStore(state => state.changeToFalse);

	return (
		<Link href="countdown">
			<a>
				<StyledButton variant="start" onClick={changeToFalse}>
					<PlayIconMain />
				</StyledButton>
			</a>
		</Link>
	);
}
