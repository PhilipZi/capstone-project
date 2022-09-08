import Link from 'next/link';

import useStore from '../hooks/useStore';

import Icon from './Icons/Icon';
import StyledButton from './StyledButtons';

export default function CountDownButton() {
	const changeToFalse = useStore(state => state.changeToFalse);

	return (
		<Link href="countdown">
			<a>
				<StyledButton
					data-testid="countdownbutton"
					variant="countdownButton"
					onClick={changeToFalse}
				>
					<Icon variant="play" size="80px" color="black" />
				</StyledButton>
			</a>
		</Link>
	);
}
