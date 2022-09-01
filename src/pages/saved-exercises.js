import Router from 'next/router';
import {Fragment} from 'react';

import DeleteIcon from '../components/Icons/DeleteIcon';
import MoveBackButtonButton from '../components/MoveBackButton';
import SavedTimerCard from '../components/SavedTimerCards';
import StyledButton from '../components/StyledButtons';
import {StyledHeader, StyledH1} from '../components/StyledHeader';
import StyledLayout from '../components/StyledLayout';
import StyledSavedExerciseContainer from '../components/StyledSavedExerciseContainer';
import useSavedExercises from '../hooks/useSavedExercises';
import useStore from '../hooks/useStore';

export default function SavedExercises() {
	const savedExercises = useSavedExercises(state => state.savedExercises);

	const deleteExcercise = useSavedExercises(state => state.deleteExcercise);
	const loadSaveExercise = useStore(state => state.loadSaveExercise);

	return (
		<>
			<StyledLayout>
				<StyledHeader>
					<MoveBackButtonButton />
					<StyledH1>Saved Exercises</StyledH1>
				</StyledHeader>
				{savedExercises.map(savedE => (
					<Fragment key={savedE.id}>
						<StyledSavedExerciseContainer>
							<StyledButton
								variant="useExercise"
								onClick={() => {
									loadSaveExercise(savedE);
									Router.back();
									console.log(savedExercises);
								}}
							>
								<SavedTimerCard
									name={savedE.name}
									minutes={savedE.exercise.minutes}
									seconds={savedE.exercise.seconds}
									repetition={savedE.repetition}
									pauseMinutes={savedE.pause.minutes}
									pauseSeconds={savedE.pause.seconds}
									sets={savedE.sets}
									setPauseMinutes={savedE.setPause.minutes}
									setPauseSeconds={savedE.setPause.seconds}
								/>
							</StyledButton>
							<StyledButton
								variant="delete"
								onClick={() => {
									deleteExcercise(savedE.id);
								}}
							>
								<DeleteIcon />
							</StyledButton>
						</StyledSavedExerciseContainer>
					</Fragment>
				))}
			</StyledLayout>
		</>
	);
}
