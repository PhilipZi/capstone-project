import dynamic from 'next/dynamic';
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
	const StyledWrapper = dynamic(() => import('../components/StyledWrapper'), {
		ssr: false,
	});

	const deleteExcercise = useSavedExercises(state => state.deleteExcercise);
	const loadSaveExercise = useStore(state => state.loadSaveExercise);

	return (
		<StyledWrapper>
			<StyledLayout variant="saved">
				<StyledHeader variant="counter">
					<MoveBackButtonButton />
					<StyledH1>Saved Exercises</StyledH1>
				</StyledHeader>
				{savedExercises.map(savedExercise => (
					<Fragment key={savedExercise.id}>
						<StyledSavedExerciseContainer>
							<StyledButton
								onClick={() => {
									loadSaveExercise(savedExercise);
									Router.back();
									console.log(savedExercises);
								}}
							>
								<SavedTimerCard
									name={savedExercise.name}
									minutes={savedExercise.exercise.minutes}
									seconds={savedExercise.exercise.seconds}
									repetition={savedExercise.repetition}
									pauseMinutes={savedExercise.pause.minutes}
									pauseSeconds={savedExercise.pause.seconds}
									sets={savedExercise.sets}
									setPauseMinutes={savedExercise.setPause.minutes}
									setPauseSeconds={savedExercise.setPause.seconds}
								/>
							</StyledButton>
							<StyledButton
								variant="delete"
								onClick={() => {
									deleteExcercise(savedExercise.id);
								}}
							>
								<DeleteIcon />
							</StyledButton>
						</StyledSavedExerciseContainer>
					</Fragment>
				))}
			</StyledLayout>
		</StyledWrapper>
	);
}
