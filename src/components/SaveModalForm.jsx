import {nanoid} from 'nanoid';

import useSavedExercises from '../hooks/useSavedExercises';
import useStore from '../hooks/useStore';

import WhiteAdaptation from './Icons/WhiteAdaptation';
import StyledInput from './StyledInput';
import StyledModalSection from './StyledModalSection';
import StyledWhiteAdaptation from './StyledWhiteAdaptation';

export default function SaveModal({onCancel}) {
	const currentExercise = useStore(state => state.currentExercise);
	const addNewExercise = useSavedExercises(state => state.addNewExercise);

	function handleSave(event) {
		event.preventDefault();
		const input = event.target.name.value;
		addNewExercise({...currentExercise, name: input, id: nanoid()});
		onCancel();
	}

	return (
		<StyledModalSection>
			<form onSubmit={handleSave}>
				<h2>Save this workout</h2>
				<label htmlFor="savename"></label>
				<StyledInput
					variant="savename"
					type="text"
					id="name"
					name="name"
					placeholder="Name your workout"
				></StyledInput>

				<button type="submit">SAVE</button>
				<button type="button" onClick={onCancel}>
					CANCEL
				</button>
			</form>
			<StyledWhiteAdaptation>
				<WhiteAdaptation />
			</StyledWhiteAdaptation>
		</StyledModalSection>
	);
}
