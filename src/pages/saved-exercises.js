import Router from 'next/router';

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
	const setExercise = useStore(state => state.setExercise);
	const setRepetition = useStore(state => state.setRepetition);
	const setPause = useStore(state => state.setPause);
	const setSets = useStore(state => state.setSets);
	const setPauseSets = useStore(state => state.setPauseSets);
	const deleteExcercise = useSavedExercises(state => state.deleteExcercise);

	return (
		<>
			<StyledLayout>
				<StyledHeader>
					<MoveBackButtonButton />
					<StyledH1>Saved Exercises</StyledH1>
				</StyledHeader>
				{savedExercises.map((savedE, idx) => (
					<>
						<StyledSavedExerciseContainer>
							<StyledButton
								variant="useExercise"
								onClick={() => {
									const timeObj = {
										minutes: savedE.exercise.minutes,
										seconds: savedE.exercise.seconds,
									};

									const timeObjPause = {
										minutes: savedE.pause.minutes,
										seconds: savedE.pause.seconds,
									};
									const timeObjSetPause = {
										minutes: savedE.setPause.minutes,
										seconds: savedE.setPause.seconds,
									};

									setExercise(timeObj);
									setRepetition(savedE.repetition);
									setPause(timeObjPause);
									setSets(savedE.sets);
									setPauseSets(timeObjSetPause);
									console.log(savedE);
									Router.back();
								}}
							>
								<SavedTimerCard
									key={idx}
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
									deleteExcercise(savedE.name);
								}}
							>
								<DeleteIcon />
							</StyledButton>
						</StyledSavedExerciseContainer>
					</>
				))}
			</StyledLayout>
		</>
	);
}
