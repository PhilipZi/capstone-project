import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import SetPauseIcon from './Icons/SetPauseIcon';
import InputRange from './InputRange';
import MoveBackButton from './MoveBackButton';
import StyledForm from './StyledForm';
import {StyledHeader, StyledH1} from './StyledHeader';
import SubmitButton from './SubmitButton';
import Timer from './Timer';

export default function SetPauseForm() {
	const router = useRouter();
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	function handleMinutes(event) {
		setMinutes(Number(event.target.value));
	}
	function handleSeconds(event) {
		setSeconds(Number(event.target.value));
	}

	const addSetPauseTime = useStore(state => state.addSetPauseTime);

	function handleSubmit(event) {
		event.preventDefault();
		const timeMin = Number.parseInt(event.target.minutes.value);
		const timeSec = Number.parseInt(event.target.seconds.value);

		const timeObjSetPause = {
			id: nanoid(),
			minutes: timeMin,
			seconds: timeSec,
		};
		addSetPauseTime(timeObjSetPause);
		router.back();
	}

	return (
		<>
			<StyledHeader>
				<StyledH1>
					<SetPauseIcon /> Set Pause
				</StyledH1>
			</StyledHeader>
			<MoveBackButton />
			<StyledForm onSubmit={handleSubmit} variant="setpause">
				<Timer minutes={minutes} seconds={seconds} />
				<div>
					<InputRange id="min" value={minutes} onChange={handleMinutes} name="minutes" />
					<InputRange id="sec" value={seconds} onChange={handleSeconds} name="seconds" />
				</div>
				<SubmitButton />
			</StyledForm>
		</>
	);
}
