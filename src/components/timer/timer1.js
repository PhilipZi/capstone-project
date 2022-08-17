import {nanoid} from 'nanoid';
import {useState} from 'react';

import CheckMark from '../../../public/Icons/checkMark';
import useStore from '../../hooks/useStore';

import RangeBar from './rangebar';
import Times from './times1';

export default function Timer() {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const times = useStore(state => state.times);
	const addTime = useStore(state => state.addTime);

	function handleSubmit(event) {
		event.preventDefault();
		const timeMin = Number.parseInt(event.target.minutes.value);
		const timeSec = Number.parseInt(event.target.seconds.value);

		const timeObj = {
			id: nanoid(),
			minutes: timeMin,
			seconds: timeSec,
		};
		addTime(timeObj);
		console.log(timeObj);
	}

	return (
		<form onSubmit={handleSubmit}>
			<Times minutes={minutes} seconds={seconds} />
			<label>min</label>
			<RangeBar value={minutes} setValue={setMinutes} name="minutes" />
			<label>sec</label>
			<RangeBar value={seconds} setValue={setSeconds} name="seconds" />
			<div>
				<button>
					<CheckMark />
				</button>
			</div>
			<ul>
				{times?.map(time => {
					return (
						<li key={time.id}>
							{time.minutes}:{time.seconds}
						</li>
					);
				})}
			</ul>
		</form>
	);
}
