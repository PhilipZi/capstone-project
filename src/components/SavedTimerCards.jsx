import StyledLi from './StyledLi';

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
		<div>
			<h2>{name}</h2>
			<ul>
				<StyledLi>
					exercise: {minutes}:{seconds}
				</StyledLi>
				<StyledLi> repetition: {repetition}</StyledLi>
				<StyledLi>
					pause: {pauseMinutes}:{pauseSeconds}{' '}
				</StyledLi>
				<StyledLi></StyledLi>
				<StyledLi>sets: {sets}</StyledLi>
				<StyledLi>
					set pause: {setPauseMinutes}:{setPauseSeconds}
				</StyledLi>
			</ul>
		</div>
	);
}
