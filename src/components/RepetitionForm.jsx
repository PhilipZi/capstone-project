import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../hooks/useStore';

import MinusIcon from './Icons/MinusIcon';
import PlusIcon from './Icons/PlusIcon';
import RepetitionIcon from './Icons/RepetitionIcon';
import MoveBackButton from './MoveBackButton';
import StyledButton from './StyledButtons';
import StyledForm from './StyledForms';
import {StyledHeader, StyledH1} from './StyledHeader';
import StyledInput from './StyledInput';
import SubmitButton from './SubmitButton';

export default function RepetitionForm() {
	const router = useRouter();
	const [repetitionCounter, setRepetitionCounter] = useState(1);
	function decrementRepetition() {
		setRepetitionCounter(repetitionCounter - 1);
	}

	function incrementCounter() {
		setRepetitionCounter(repetitionCounter + 1);
	}

	const setRepetition = useStore(state => state.setRepetition);

	function handleSubmit(event) {
		event.preventDefault();
		setRepetition(repetitionCounter);
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
			<StyledForm variant="repetitionSets" onSubmit={handleSubmit}>
				<StyledButton
					aria-label="decrement"
					onClick={decrementRepetition}
					disabled={repetitionCounter === 1}
					type="button"
					variant="plus"
				>
					<MinusIcon />
				</StyledButton>
				<label htmlFor="repetitionCounter">
					<StyledInput
						id="repetitionCounter"
						value={repetitionCounter.toString().padEnd(2, 'x')}
						size={2}
						readOnly
						variant="counter"
					/>
				</label>

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
