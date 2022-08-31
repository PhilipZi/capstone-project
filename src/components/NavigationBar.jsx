import {useState} from 'react';

import useStore from '../hooks/useStore';

import PauseIconTimer from './Icons/PauseIconTimer';
import PlayIconNavbar from './Icons/PlayIconNavbar';
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
			{isShown ? <SaveModalForm onCancel={handleVisibility} /> : ''}
			{!timerOn ? (
				<StyledButton variant="play" onClick={changeToTrue}>
					<PlayIconNavbar />
				</StyledButton>
			) : (
				<StyledButton variant="play" onClick={changeToFalse}>
					<PauseIconTimer />
				</StyledButton>
			)}
		</StyledNavigationBar>
	);
}
