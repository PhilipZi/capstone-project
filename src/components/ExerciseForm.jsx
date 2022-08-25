import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import PlayIcon from './Icons/PlayIcon';
import InputRange from './InputRange';
import MoveBackButton from './MoveBackButton';
import StyledForm from './StyledForms';
import {StyledHeader, StyledH1} from './StyledHeader';
import SubmitButton from './SubmitButton';
import Timer from './Timer';

export default function ExerciseForm() {
	const router = useRouter();
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	function handleMinutes(event) {
		setMinutes(Number(event.target.value));
	}
	function handleSeconds(event) {
		setSeconds(Number(event.target.value));
	}

	const setExercise = useStore(state => state.setExercise);

	function handleSubmit(event) {
		event.preventDefault();
		const timeMin = Number.parseInt(event.target.minutes.value);
		const timeSec = Number.parseInt(event.target.seconds.value);

		const timeObjExercise = {
			minutes: timeMin,
			seconds: timeSec,
		};
		setExercise(timeObjExercise);
		router.back();
	}

	return (
		<>
			<StyledHeader>
				<StyledH1>
					<PlayIcon /> Exercise
				</StyledH1>
			</StyledHeader>
			<MoveBackButton />
			<StyledForm onSubmit={handleSubmit} variant="exercise">
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
