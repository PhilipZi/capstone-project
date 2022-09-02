import create from 'zustand';
import {persist} from 'zustand/middleware';

const useSavedExercises = create(
	persist(
		set => ({
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
		}),
		{name: 'Time Keeper'}
	)
);
export default useSavedExercises;
