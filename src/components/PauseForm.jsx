import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import PauseIcon from './Icons/PauseIcon';
import InputRange from './InputRange';
import MoveBackButton from './MoveBackButton';
import StyledForm from './StyledForms';
import {StyledHeader, StyledH1} from './StyledHeader';
import SubmitButton from './SubmitButton';
import Timer from './Timer';

export default function PauseForm() {
	const router = useRouter();
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	function handleMinutes(event) {
		setMinutes(Number(event.target.value));
	}
	function handleSeconds(event) {
		setSeconds(Number(event.target.value));
	}

	const setPause = useStore(state => state.setPause);

	function handleSubmit(event) {
		event.preventDefault();
		const timeMin = Number.parseInt(event.target.minutes.value);
		const timeSec = Number.parseInt(event.target.seconds.value);

		const timeObjPause = {
			minutes: timeMin,
			seconds: timeSec,
		};
		setPause(timeObjPause);
		router.back();
	}

	return (
		<>
			<StyledHeader>
				<StyledH1>
					<PauseIcon /> Pause
				</StyledH1>
			</StyledHeader>
			<MoveBackButton />
			<StyledForm onSubmit={handleSubmit} variant="pause">
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
