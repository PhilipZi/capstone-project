import SavedTimerCard from '../components/SavedTimerCards';
import useSavedExercises from '../hooks/useSavedExercises';

export default function SavedExercises() {
	const savedExercises = useSavedExercises(state => state.savedExercises);

	return (
		<>
			{savedExercises.map((savedE, idx) => (
				<SavedTimerCard
					key={idx}
					name={savedE.name}
					exercise={(savedE.exercise.minutes, savedE.exercise.seconds)}
					repetition={savedE.repetition}
					pause={savedE.pause.minutes}
					sets={savedE.sets}
					setPause={savedE.setPause.minutes}
				/>
			))}
		</>
	);
}
