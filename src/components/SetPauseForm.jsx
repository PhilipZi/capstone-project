import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import SetPauseIcon from './Icons/SetPauseIcon';
import InputRange from './InputRange';
import MoveBackButton from './MoveBackButton';
import StyledForm from './StyledForms';
import {StyledHeader, StyledH1} from './StyledHeader';
import SubmitButton from './SubmitButton';
import Timer from './Timer';

export default function SetPauseForm() {
	const currentExercise = useStore(state => state.currentExercise);
	const router = useRouter();
	const [minutes, setMinutes] = useState(currentExercise.setPause.minutes);
	const [seconds, setSeconds] = useState(currentExercise.setPause.seconds);

	function handleMinutes(event) {
		setMinutes(Number(event.target.value));
	}
	function handleSeconds(event) {
		setSeconds(Number(event.target.value));
	}

	const setPauseSets = useStore(state => state.setPauseSets);

	function handleSubmit(event) {
		event.preventDefault();
		const timeMin = Number.parseInt(event.target.minutes.value);
		const timeSec = Number.parseInt(event.target.seconds.value);

		const timeObjSetPause = {
			minutes: timeMin,
			seconds: timeSec,
		};
		setPauseSets(timeObjSetPause);
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
			<StyledForm onSubmit={handleSubmit} variant="time">
				<Timer minutes={minutes} seconds={seconds} />
				<div>
					<label htmlFor="min">
						<InputRange
							id="min"
							value={minutes}
							onChange={handleMinutes}
							name="minutes"
						/>
					</label>
					<label htmlFor="sec">
						<InputRange
							id="sec"
							value={seconds}
							onChange={handleSeconds}
							name="seconds"
						/>
					</label>
				</div>
				<SubmitButton />
			</StyledForm>
		</>
	);
}
