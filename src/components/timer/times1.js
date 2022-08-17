export default function Times({minutes, seconds}) {
	return (
		<>
			<div>
				<h1>
					{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
				</h1>
			</div>
		</>
	);
}
