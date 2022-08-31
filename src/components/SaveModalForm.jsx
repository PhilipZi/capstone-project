import useSavedExercises from '../hooks/useSavedExercises';
import useStore from '../hooks/useStore';

import StyledModalSection from './StyledModalSection';

export default function SaveModal({onCancel}) {
	const currentExercise = useStore(state => state.currentExercise);
	const addNewExercise = useSavedExercises(state => state.addNewExercise);

	function handleSave(event) {
		event.preventDefault();
		const input = event.target.name.value;
		addNewExercise({...currentExercise, name: input});
		onCancel();
	}

	return (
		<StyledModalSection>
			<form onSubmit={handleSave}>
				<h2>Save this workout</h2>
				<label>describe your workout</label>
				<input type="text" id="name" name="name" placeholder="name"></input>
				<button type="submit">SAVE</button>
				<button type="button" onClick={onCancel}>
					CANCEL
				</button>
			</form>
		</StyledModalSection>
	);
}
