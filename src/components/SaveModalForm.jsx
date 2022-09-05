import {nanoid} from 'nanoid';

import useSavedExercises from '../hooks/useSavedExercises';
import useStore from '../hooks/useStore';

import Icon from './Icons/Icon';
import WhiteAdaptation from './Icons/WhiteAdaptation';
import StyledButton from './StyledButtons';
import StyledButtonsModal from './StyledButtonsModal';
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
				<h2>Save this workout?</h2>
				<label htmlFor="savename"></label>
				<StyledInput
					variant="savename"
					type="text"
					id="name"
					name="name"
					placeholder="Name your workout"
				></StyledInput>
				<StyledButtonsModal>
					<StyledButton variant="modal" type="button" onClick={onCancel}>
						<Icon variant="cancel" size="32px" color="red" />
					</StyledButton>
					<StyledButton variant="modal" type="submit">
						<Icon variant="checkMark" size="32px" color="green" />
					</StyledButton>
				</StyledButtonsModal>
			</form>
			<StyledWhiteAdaptation>
				<WhiteAdaptation />
			</StyledWhiteAdaptation>
		</StyledModalSection>
	);
}
