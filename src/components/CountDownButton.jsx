import Link from 'next/link';

import useStore from '../hooks/useStore';

import Icon from './Icons/Icon';
import StyledButton from './StyledButtons';

export default function CountDownButton() {
	const changeToFalse = useStore(state => state.changeToFalse);

	return (
		<Link href="countdown">
			<a>
				<StyledButton variant="start" onClick={changeToFalse}>
					<Icon variant="play" size="70px" />
				</StyledButton>
			</a>
		</Link>
	);
}
