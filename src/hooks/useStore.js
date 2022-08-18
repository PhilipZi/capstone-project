import create from 'zustand';

const useStore = create(set => ({
	times: [],
	addTime: timeObj => {
		set(state => {
			return {times: [...state.times, timeObj]};
		});
	},
}));

export default useStore;
