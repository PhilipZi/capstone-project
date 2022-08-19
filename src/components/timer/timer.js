import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import BackArrow from '../../../public/Icons/backArrow';
import CheckMark from '../../../public/Icons/checkMark';
import PlayButton from '../../../public/Icons/playIcon';
import useStore from '../../hooks/useStore';

import RangeBar from './rangebar';
import StyledBackArrowButton from './styledBackArrowButton';
import StyledContainerButton from './styledContainerButton';
import StyledForm from './styledForm';
import StyledH1 from './styledH1';
import StyledHeader from './styledHeader';
import StyledSubmitButton from './styledSubmitButton';
import Times from './times';

export default function Timer() {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const addTime = useStore(state => state.addTime);
	const router = useRouter();

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
		router.back();
	}

	function SubmitButton() {
		return (
			<StyledContainerButton>
				<StyledSubmitButton>
					<CheckMark />
				</StyledSubmitButton>
			</StyledContainerButton>
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
	function handleMinutes(event) {
		setMinutes(Number(event.target.value));
	}
	function handleSeconds(event) {
		setSeconds(Number(event.target.value));
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
				<div>
					<RangeBar id="min" value={minutes} onChange={handleMinutes} name="minutes" />
					<RangeBar id="sec" value={seconds} onChange={handleSeconds} name="seconds" />
				</div>
				<SubmitButton />
			</StyledForm>
		</>
	);
}
