/**
 * @jest-environment jsdom
 */
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import useStore from '../hooks/useStore';

import SubmitButton from './SubmitButton';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			push: jest.fn(),
		};
	},
}));

describe('SubmitButton component', () => {
	it('should render children', () => {
		render(<SubmitButton />);
		const submitButton = screen.getByTestId('submitButton');
		expect(submitButton).toBeInTheDocument();
	});

	it.skip('should allow clicks', async () => {
		const store = renderHook(() => useStore());
		const {submit} = store.result.current;
		render(<SubmitButton />);
		const submitButton = screen.getByTestId('submitButton');
		await userEvent.click(submitButton);
		expect(submit).toBeCalled(1);
	});
});
