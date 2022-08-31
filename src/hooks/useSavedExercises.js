import create from 'zustand';

const useSavedExercises = create(set => ({
	savedExercises: [],
	addNewExercise: currentExercise => {
		set(state => {
			return {savedExercises: [...state.savedExercises, currentExercise]};
		});
	},
	deleteExcercise: name => {
		set(state => {
			return {
				savedExercises: state.savedExercises.filter(
					savedExercises => savedExercises.name !== name
				),
			};
		});
	},
}));

export default useSavedExercises;
