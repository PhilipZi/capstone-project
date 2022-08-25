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
export default function SetsForm() {
	const router = useRouter();
	const [setsCounter, setSetsCounter] = useState(0);

	function decrementRepetition() {
		setSetsCounter(setsCounter - 1);
	}

	function incrementCounter() {
		setSetsCounter(setsCounter + 1);
	}
	const addSetsCounter = useStore(state => state.addSetsCounter);

	function handleSubmit(event) {
		event.preventDefault();

		const setsCounterObject = {
			id: nanoid(),
			setsCounter: setsCounter,
		};
		addSetsCounter(setsCounterObject);
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
					disabled={setsCounter === 0}
					type="button"
					variant="plus"
				>
					<MinusIcon />
				</StyledButton>
				<StyledInput
					value={setsCounter.toString().padEnd(2, 'x')}
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
