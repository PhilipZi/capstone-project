import PlayIconNavbar from './Icons/PlayIconNavbar';
import StopIcon from './Icons/StopIcon';
import StyledButton from './StyledButtons';
import StyledNavigationBar from './StyledNavigationBar';

export default function NavigationBar() {
	return (
		<StyledNavigationBar>
			<StyledButton variant="play">
				<PlayIconNavbar />
			</StyledButton>
			<StyledButton variant="play">
				<StopIcon />
			</StyledButton>
		</StyledNavigationBar>
	);
}
