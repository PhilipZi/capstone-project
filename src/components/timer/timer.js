import {useEffect} from 'react';
import {useState} from 'react';

import Times from './times';

export default function Timer() {
	const [thirtysec, setThirtysec] = useState(1);
	const [onemin, setOnemin] = useState(5);
	const [fivemin, setFivemin] = useState(20);
	const [seconds, setSecond] = useState(0);
	const [stage, setStage] = useState(0);
	const [ticking, setTicking] = useState(false);

	const switchStage = index => {
		setStage(index);
	};

	const getTickingTime = () => {
		const timeStage = {
			0: thirtysec,
			1: onemin,
			2: fivemin,
		};
		return timeStage[stage];
	};

	const updateMinute = () => {
		const updateStage = {
			0: setThirtysec,
			1: setOnemin,
			2: setFivemin,
		};
		return updateStage[stage];
	};

	const clockTicking = () => {
		const minutes = getTickingTime();
		const setMinutes = updateMinute();

		if (minutes === 0 && seconds === 0) {
			alert('Time up');
		} else if (seconds === 0) {
			setMinutes(minute => minute - 1);
			setSecond(59);
		} else {
			setSecond(second => second - 1);
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			if (ticking) {
				clockTicking();
			}
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [seconds, thirtysec, onemin, fivemin, ticking]);

	return (
		<div>
			<Times
				stage={stage}
				switchStage={switchStage}
				getTickingTime={getTickingTime}
				seconds={seconds}
				ticking={ticking}
				setTicking={setTicking}
			/>
		</div>
	);
}
