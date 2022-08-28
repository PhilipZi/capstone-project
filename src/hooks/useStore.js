import create from 'zustand';

const useStore = create(set => ({
	currentExercise: {
		exercise: {minutes: 0, seconds: 0},
		repetition: 1,
		pause: {minutes: 0, seconds: 0},
		sets: 1,
		setPause: {minutes: 0, seconds: 0},
	},
	setExercise: newExercise => {
		set(state => {
			return {
				currentExercise: {...state.currentExercise, exercise: newExercise},
			};
		});
	},
	setRepetition: newRepetitions => {
		set(state => {
			return {
				currentExercise: {...state.currentExercise, repetition: newRepetitions},
			};
		});
	},
	setPause: newPause => {
		set(state => {
			return {
				currentExercise: {...state.currentExercise, pause: newPause},
			};
		});
	},
	setSets: newSets => {
		set(state => {
			return {
				currentExercise: {...state.currentExercise, sets: newSets},
			};
		});
	},
	setPauseSets: newPauseSets => {
		set(state => {
			return {
				currentExercise: {...state.currentExercise, setPause: newPauseSets},
			};
		});
	},
	timerOn: false,
	changeToTrue: () => set(state => ({timerOn: (state.timerOn = true)})),
	changeToFalse: () => set(state => ({timerOn: (state.timerOn = false)})),
}));

// const useStore = create(set => ({
// 	exerciseTimes: [],
// 	addExerciseTime: timeObjExercise => {
// 		set(state => {
// 			return {exerciseTimes: [...state.exerciseTimes, timeObjExercise]};
// 		});
// 	},

// 	repetitionCounter: [],
// 	addRepetitionCounter: repetitionCounterObj => {
// 		set(state => {
// 			return {repetitionCounter: [...state.repetitionCounter, repetitionCounterObj]};
// 		});
// 	},

// 	pauseTimes: [],
// 	addPauseTime: timeObjPause => {
// 		set(state => {
// 			return {pauseTimes: [...state.pauseTimes, timeObjPause]};
// 		});
// 	},

// 	setsCounter: [],
// 	addSetsCounter: setsCounterObj => {
// 		set(state => {
// 			return {setsCounter: [...state.setsCounter, setsCounterObj]};
// 		});
// 	},

// 	setPauseTimes: [],
// 	addSetPauseTime: timeObjSetPause => {
// 		set(state => {
// 			return {setPauseTimes: [...state.setPauseTimes, timeObjSetPause]};
// 		});
// 	},
// }));

export default useStore;
