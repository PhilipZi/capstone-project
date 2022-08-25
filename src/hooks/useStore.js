import create from 'zustand';

const useStore = create(set => ({
	exerciseTimes: [],
	addExerciseTime: timeObjExercise => {
		set(state => {
			return {exerciseTimes: [...state.exerciseTimes, timeObjExercise]};
		});
	},

	repetitionCounter: [],
	addRepetitionCounter: repetitionCounterObject => {
		set(state => {
			return {repetitionCounter: [...state.repetitionCounter, repetitionCounterObject]};
		});
	},

	pauseTimes: [],
	addPauseTime: timeObjPause => {
		set(state => {
			return {pauseTimes: [...state.pauseTimes, timeObjPause]};
		});
	},

	setsCounter: [],
	addSetsCounter: setsCounterObject => {
		set(state => {
			return {setsCounter: [...state.setsCounter, setsCounterObject]};
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
