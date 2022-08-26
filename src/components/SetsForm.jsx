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
export default function SetsForm() {
	const router = useRouter();
	const [setsCounter, setSetsCounter] = useState(1);

	function decrementRepetition() {
		setSetsCounter(setsCounter - 1);
	}

	function incrementCounter() {
		setSetsCounter(setsCounter + 1);
	}
	const setSets = useStore(state => state.setSets);

	function handleSubmit(event) {
		event.preventDefault();

		setSets(setsCounter);
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
					disabled={setsCounter === 1}
					type="button"
					variant="plus"
				>
					<MinusIcon />
				</StyledButton>
				<label htmlFor="setsCounter">
					<StyledInput
						id="setsCounter"
						value={setsCounter.toString().padEnd(2, 'x')}
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
