export default function SavedTimerCard({name, exercise, repetition, pause, sets, setPause}) {
	return (
		<div>
			<h2>{name}</h2>
			<ul>
				<li>{exercise}</li>
				<li>{repetition}</li>
				<li>{pause}</li>
				<li>{sets}</li>
				<li>{setPause}</li>
			</ul>
		</div>
	);
}
