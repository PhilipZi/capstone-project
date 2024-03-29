import {StyledH2} from './StyledHeader';
import {
	StyledLi,
	StyledUl,
	StyledSpan,
	StyledA,
	StyledSavedTimerCardDiv,
} from './StyledSavedTimerCard';

export default function SavedTimerCard({
	name,
	minutes,
	seconds,
	repetition,
	pauseMinutes,
	pauseSeconds,
	sets,
	setPauseMinutes,
	setPauseSeconds,
}) {
	return (
		<StyledSavedTimerCardDiv>
			{name ? (
				<StyledH2 variant="saved"> {name}</StyledH2>
			) : (
				<StyledH2 variant="saved">Not described</StyledH2>
			)}
			<StyledUl>
				<StyledLi variant="exercise">
					<StyledSpan>Exercise </StyledSpan>
					<StyledA>
						{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
					</StyledA>
				</StyledLi>
				<StyledLi variant="repetition">
					<StyledSpan>Repetition </StyledSpan>
					<StyledA>{repetition}</StyledA>
				</StyledLi>
				<StyledLi variant="pause">
					<StyledSpan>Pause: </StyledSpan>
					<StyledA>
						{pauseMinutes.toString().padStart(2, '0')}:
						{pauseSeconds.toString().padStart(2, '0')}
					</StyledA>
				</StyledLi>
				<StyledLi variant="sets">
					<StyledSpan>Sets </StyledSpan>
					<StyledA>{sets}</StyledA>
				</StyledLi>
				<StyledLi variant="setpause">
					<StyledSpan>Setpause </StyledSpan>
					<StyledA>
						{setPauseMinutes.toString().padStart(2, '0')}:
						{setPauseSeconds.toString().padStart(2, '0')}
					</StyledA>
				</StyledLi>
			</StyledUl>
		</StyledSavedTimerCardDiv>
	);
}
