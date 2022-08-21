import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import BackArrow from '../../../public/Icons/backArrow';
import PlayButton from '../../../public/Icons/playIcon';
import useStore from '../../hooks/useStore';
import SubmitButton from '../globalComponents/submitButton/submitButton';

import RangeBar from './rangebar';
import StyledBackArrowButton from './styledBackArrowButton';
import StyledDivRangeBars from './styledDivRangeBars';
import StyledForm from './styledForm';
import StyledH1 from './styledH1';
import StyledHeader from './styledHeader';
import Times from './times';

export default function TimerExercises() {
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

	function MovebackHome() {
		return (
			<StyledBackArrowButton onClick={() => router.back()}>
				<BackArrow />
			</StyledBackArrowButton>
		);
	}

	return (
		<>
			<StyledHeader>
				<StyledH1>
					<PlayButton /> Exercise
				</StyledH1>
			</StyledHeader>
			<MovebackHome />

			<StyledForm onSubmit={handleSubmit}>
				<Times minutes={minutes} seconds={seconds} />
				<StyledDivRangeBars>
					<RangeBar id="min" value={minutes} onChange={handleMinutes} name="minutes" />
					<RangeBar id="sec" value={seconds} onChange={handleSeconds} name="seconds" />
				</StyledDivRangeBars>
				<SubmitButton />
			</StyledForm>
		</>
	);
}
