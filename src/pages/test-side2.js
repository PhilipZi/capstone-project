import {useEffect, useState} from 'react';

export default function App() {
	// initialize timeLeft with the seconds prop
	const [timeLeft, setTimeLeft] = useState([
		{id: 0, timer: 5, name: 'Squads'},
		{id: 1, timer: 10, name: 'Bizeps'},
		{id: 2, timer: 10, name: 'Abs'},
	]);

	useEffect(() => {
		// exit early when we reach 0
		if (timeLeft.every(time => time.timer === 0)) return;

		// save intervalId to clear the interval when the
		// component re-renders
		const intervalId = setInterval(() => {
			const exerciseTimerNotZero = timeLeft.find(time => time.timer > 0);
			setTimeLeft(
				timeLeft.map(timer => {
					if (timer.id === exerciseTimerNotZero.id) {
						return {...timer, timer: timer.timer - 1};
					} else {
						return timer;
					}
				})
			);
		}, 1000);

		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect
		// when we update it
	}, [timeLeft]);

	return (
		<div>
			{timeLeft.map(timer => {
				return (
					<section key={timer.id}>
						<h2>{timer.name}</h2>
						<h3>{timer.timer}</h3>
					</section>
				);
			})}
		</div>
	);
}
