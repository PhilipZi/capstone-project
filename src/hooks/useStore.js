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

	pauseTimes: [],
	addPauseTime: timeObjPause => {
		set(state => {
			return {pauseTimes: [...state.pauseTimes, timeObjPause]};
		});
	},

	setsCounter: [],
	addSetsCounter: setsCounterObj => {
		set(state => {
			return {setsCounter: [...state.setsCounter, setsCounterObj]};
		});
	},

	setPauseTimes: [],
	addSetPauseTime: timeObjSetPause => {
		set(state => {
			return {setPauseTimes: [...state.setPauseTimes, timeObjSetPause]};
		});
	},
}));

export default useStore;
