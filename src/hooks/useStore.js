import create from 'zustand';

const useStore = create(set => ({
	exerciseTimes: [],
	addExerciseTime: timeObjExercise => {
		set(state => {
			return {exerciseTimes: [...state.exerciseTimes, timeObjExercise]};
		});
	},

	repetitionCounter: [],
	addRepetitionCounter: repetitionCounterObj => {
		set(state => {
			return {repetitionCounter: [...state.repetitionCounter, repetitionCounterObj]};
		});
	},
}));

export default useStore;
