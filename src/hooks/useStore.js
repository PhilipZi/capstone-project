import create from 'zustand';

const useStore = create(set => ({
	times: [],
	addTime: timeObj => {
		set(state => {
			return {times: [timeObj, ...state.times]};
		});
	},
}));

export default useStore;
