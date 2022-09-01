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
				<StyledLi variant="exercise">
					<span>exercise: </span>
					{minutes}:{seconds}
				</StyledLi>
				<StyledLi variant="repetition">
					{' '}
					<span>repetition: </span>
					{repetition}
				</StyledLi>
				<StyledLi variant="pause">
					<span>pause: </span>
					{pauseMinutes}:{pauseSeconds}{' '}
				</StyledLi>
				<StyledLi variant="sets">
					<span>sets: </span>
					{sets}
				</StyledLi>
				<StyledLi variant="setpause">
					<span>set pause: </span>
					{setPauseMinutes}:{setPauseSeconds}
				</StyledLi>
			</ul>
		</div>
	);
}
