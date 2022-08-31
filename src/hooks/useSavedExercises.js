import create from 'zustand';

const useSavedExercises = create(set => ({
	savedExercises: [],
	addNewExercise: currentExercise => {
		set(state => {
			return {savedExercises: [...state.savedExercises, currentExercise]};
		});
	},
}));

export default useSavedExercises;
