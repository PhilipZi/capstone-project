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

	function handleClick() {
		console.log(savedExercises);
		const timeObj = {
			minutes: savedExercises.exercise.minutes,
			seconds: savedExercises.exercise.seconds,
		};

		const timeObjPause = {
			minutes: savedExercises.pause.minutes,
			seconds: savedExercises.pause.seconds,
		};

		const timeObjSetPause = {
			minutes: savedExercises.setPause.minutes,
			seconds: savedExercises.setPause.seconds,
		};

		setExercise(timeObj);
		setRepetition(savedExercises.repetition);
		setPause(timeObjPause);
		setSets(savedExercises.sets);
		setPauseSets(timeObjSetPause);
		console.log(timeObj);
		console.log(timeObjPause);
		console.log(timeObjSetPause);
	}

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
							handleClick;
						}}
					>
						use this workout
					</button>
				</>
			))}
		</>
	);
}
