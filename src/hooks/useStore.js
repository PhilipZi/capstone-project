import create from 'zustand';

const useStore = create(set => ({
	exerciseTimes: [],
	addExerciseTime: timeObjExercise => {
		set(state => {
			return {exerciseTimes: [...state.exerciseTimes, timeObjExercise]};
		});
	},
}));

export default useStore;
