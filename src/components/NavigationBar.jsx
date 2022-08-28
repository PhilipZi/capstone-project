import useStore from '../hooks/useStore';

import PlayIconNavbar from './Icons/PlayIconNavbar';
import StopIcon from './Icons/StopIcon';
import StyledButton from './StyledButtons';
import StyledNavigationBar from './StyledNavigationBar';

export default function NavigationBar() {
	const changeToTrue = useStore(state => state.changeToTrue);
	const changeToFalse = useStore(state => state.changeToFalse);

	return (
		<StyledNavigationBar>
			<StyledButton variant="play" onClick={changeToTrue}>
				<PlayIconNavbar />
			</StyledButton>
			<StyledButton variant="play" onClick={changeToFalse}>
				<StopIcon />
			</StyledButton>
		</StyledNavigationBar>
	);
}
