import create from 'zustand';

const useSavedExercises = create(set => ({
	savedExercises: [],
	addNewExercise: currentExercise => {
		set(state => {
			return {savedExercises: [...state.savedExercises, currentExercise]};
		});
	},
	deleteExcercise: id => {
		set(state => {
			return {
				savedExercises: state.savedExercises.filter(
					savedExercises => savedExercises.id !== id
				),
			};
		});
	},
}));

export default useSavedExercises;
