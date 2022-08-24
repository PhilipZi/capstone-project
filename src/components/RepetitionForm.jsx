import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import MinusIcon from './Icons/MinusIcon';
import PlusIcon from './Icons/plusIcon';
import RepetitionIcon from './Icons/RepetitionIcon';
import MoveBackButton from './MoveBackButton';
import StyledButton from './StyledButtons';
import StyledForm from './StyledForms';
import {StyledHeader, StyledH1} from './StyledHeader';
import StyledInput from './StyledInput';
import SubmitButton from './SubmitButton';

export default function RepetitionForm() {
	const router = useRouter();
	const [repetitionCounter, setRepetitionCounter] = useState(0);
	function decrementRepetition() {
		setRepetitionCounter(repetitionCounter - 1);
	}

	function incrementCounter() {
		setRepetitionCounter(repetitionCounter + 1);
	}

	const addRepetitionCounter = useStore(state => state.addRepetitionCounter);

	function handleSubmit(event) {
		event.preventDefault();

		const repetitionCounterObj = {
			id: nanoid(),
			repetitionCounter: repetitionCounter,
		};
		addRepetitionCounter(repetitionCounterObj);
		router.push('/');
	}

	return (
		<>
			<StyledHeader>
				<StyledH1>
					<RepetitionIcon /> Repetition
				</StyledH1>
			</StyledHeader>
			<MoveBackButton />
			<StyledForm variant="repetition" onSubmit={handleSubmit}>
				<StyledButton
					aria-label="decrement"
					onClick={decrementRepetition}
					disabled={repetitionCounter === 0}
					type="button"
					variant="plus"
				>
					<MinusIcon />
				</StyledButton>
				<StyledInput
					value={repetitionCounter.toString().padEnd(2, 'x')}
					size={2}
					readOnly
					variant="counter"
				/>

				<StyledButton
					aria-label="increment"
					onClick={incrementCounter}
					type="button"
					variant="plus"
				>
					<PlusIcon />
				</StyledButton>
				<SubmitButton />
			</StyledForm>
		</>
	);
}
