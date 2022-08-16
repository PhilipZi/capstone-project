export default function Times({switchStage, getTickingTime, seconds, ticking, setTicking}) {
	const options = ['1min', '5min', '20min'];

	return (
		<>
			<div>
				{options.map((option, index) => {
					return (
						<h1 key={index} onClick={() => switchStage(index)}>
							{option}
						</h1>
					);
				})}
			</div>
			<div>
				<h1>
					{getTickingTime()}:{seconds.toString().padStart(2, '0')}
				</h1>
			</div>
			<button onClick={() => setTicking(ticking => !ticking)}>
				{ticking ? 'Stop' : 'Start'}
			</button>
		</>
	);
}
