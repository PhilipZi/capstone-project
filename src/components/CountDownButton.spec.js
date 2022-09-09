/**
 * @jest-environment jsdom
 */
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import useStore from '../hooks/useStore';

import CountDownButton from './CountDownButton';

describe('CountDownButton component', () => {
	it('should render children', () => {
		render(<CountDownButton />);
		const countDownButton = screen.getByRole('button');
		expect(countDownButton).toBeInTheDocument();
	});

	it.skip('should allow clicks', async () => {
		const store = renderHook(() => useStore());
		const {changeToFalse} = store.result.current;
		render(<CountDownButton />);
		const countDownButton = screen.getByTestId('countdownbutton');
		await userEvent.click(countDownButton);
		expect(changeToFalse).toBeCalled();
	});
});
