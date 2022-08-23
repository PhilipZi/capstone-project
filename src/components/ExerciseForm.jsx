import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import PlayButton from './Icons/PlayIcon';
import InputRange from './InputRange';
import MoveBackButton from './MoveBackButton';
import StyledForm from './StyledForm';
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

	const addExerciseTime = useStore(state => state.addExerciseTime);

	function handleSubmit(event) {
		event.preventDefault();
		const timeMin = Number.parseInt(event.target.minutes.value);
		const timeSec = Number.parseInt(event.target.seconds.value);

		const timeObjExercise = {
			id: nanoid(),
			minutes: timeMin,
			seconds: timeSec,
		};
		addExerciseTime(timeObjExercise);
		router.back();
	}

	return (
		<>
			<StyledHeader>
				<StyledH1>
					<PlayButton /> Exercise
				</StyledH1>
			</StyledHeader>
			<MoveBackButton />
			<StyledForm onSubmit={handleSubmit} variant="exercise">
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
