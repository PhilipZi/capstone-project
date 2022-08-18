import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import BackArrow from '../../../public/Icons/backArrow';
import CheckMark from '../../../public/Icons/checkMark';
import PlayButton from '../../../public/Icons/playButton';
import useStore from '../../hooks/useStore';

import RangeBar from './rangebar';
import StyledBackArrowButton from './styledBackArrowButton';
import StyledForm from './styledForm';
import StyledH1 from './styledH1';
import StyledHeader from './styledHeader';
import StyledSubmitButton from './styledSubmitButton';
import Times from './times1';

export default function Timer() {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

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

	function SubmitButton() {
		const router = useRouter();
		return (
			<StyledSubmitButton onClick={() => router.back()}>
				<CheckMark />
			</StyledSubmitButton>
		);
	}

	function MovebackHome() {
		const router = useRouter();
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
			<MovebackHome></MovebackHome>

			<StyledForm onSubmit={handleSubmit}>
				<Times minutes={minutes} seconds={seconds} />
				<div>
					<label htmlFor="min">min</label>
					<RangeBar id="min" value={minutes} setValue={setMinutes} name="minutes" />

					<label htmlFor="sec">sec</label>
					<RangeBar id="sec" value={seconds} setValue={setSeconds} name="seconds" />
				</div>
				<div>
					<SubmitButton />
				</div>
			</StyledForm>
		</>
	);
}
