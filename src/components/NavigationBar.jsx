import {useState} from 'react';

import useStore from '../hooks/useStore';

import Icon from './Icons/Icon';
import SaveIcon from './Icons/SaveIcon';
import SaveModalForm from './SaveModalForm';
import StyledButton from './StyledButtons';
import StyledNavigationBar from './StyledNavigationBar';

export default function NavigationBar() {
	const changeToTrue = useStore(state => state.changeToTrue);
	const changeToFalse = useStore(state => state.changeToFalse);
	const timerOn = useStore(state => state.timerOn);

	const [isShown, setIsShown] = useState(false);

	function handleVisibility() {
		setIsShown(!isShown);
	}

	return (
		<StyledNavigationBar>
			<StyledButton type="button" onClick={handleVisibility}>
				<SaveIcon></SaveIcon>
			</StyledButton>
			{isShown && <SaveModalForm onCancel={handleVisibility} />}
			{!timerOn ? (
				<StyledButton variant="play" onClick={changeToTrue}>
					<Icon variant="play" size="55px" />
				</StyledButton>
			) : (
				<StyledButton variant="play" onClick={changeToFalse}>
					<Icon variant="pauseIconMain" size="55px" />
				</StyledButton>
			)}
		</StyledNavigationBar>
	);
}
