import useStore from '../hooks/useStore';

import PauseIconTimer from './Icons/PauseIconTimer';
import PlayIconNavbar from './Icons/PlayIconNavbar';
// import SaveIcon from './Icons/SaveIcon';
import StyledButton from './StyledButtons';
import StyledNavigationBar from './StyledNavigationBar';

export default function NavigationBar() {
	const changeToTrue = useStore(state => state.changeToTrue);
	const changeToFalse = useStore(state => state.changeToFalse);
	const timerOn = useStore(state => state.timerOn);

	return (
		<StyledNavigationBar>
			{/* <StyledButton>
				<SaveIcon></SaveIcon>
			</StyledButton> */}
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
