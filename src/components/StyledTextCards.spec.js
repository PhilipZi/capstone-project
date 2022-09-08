/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import StyledTextCards from './StyledTextCards';

describe('StyledTextCards component', () => {
	it('should render children', () => {
		const text = 'Set Pause';
		render(<StyledTextCards>{text}</StyledTextCards>);
		const styledTextCards = screen.getByText(text);
		expect(styledTextCards).toBeInTheDocument();
	});
});
