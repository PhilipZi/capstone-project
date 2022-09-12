import {useRouter} from 'next/router';

import useStore from '../hooks/useStore';

import Icon from './Icons/Icon';
import StyledButton from './StyledButtons';

export default function CountDownButton() {
	const router = useRouter();
	const changeToFalse = useStore(state => state.changeToFalse);

	function onButtonClick() {
		changeToFalse();
		router.push('/countdown');
	}

	return (
		<StyledButton
			data-testid="countdownbutton"
			variant="countdownButton"
			onClick={onButtonClick}
		>
			<Icon variant="play" size="80px" color="black" />
		</StyledButton>
	);
}
