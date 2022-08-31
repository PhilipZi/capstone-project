import Router from 'next/router';

import SavedTimerCard from '../components/SavedTimerCards';
import useSavedExercises from '../hooks/useSavedExercises';
import useStore from '../hooks/useStore';

export default function SavedExercises() {
	const savedExercises = useSavedExercises(state => state.savedExercises);
	const setExercise = useStore(state => state.setExercise);
	const setRepetition = useStore(state => state.setRepetition);
	const setPause = useStore(state => state.setPause);
	const setSets = useStore(state => state.setSets);
	const setPauseSets = useStore(state => state.setPauseSets);

	return (
		<>
			{savedExercises.map((savedE, idx) => (
				<>
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
					<button
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
							Router.back();
						}}
					>
						use this workout
					</button>
				</>
			))}
		</>
	);
}
