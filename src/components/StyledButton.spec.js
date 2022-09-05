/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import StyledButton from './StyledButtons';

describe('StyledButton component', () => {
	it('should render children', () => {
		const text = 'Click me';
		render(<StyledButton>{text}</StyledButton>);
		const styledButton = screen.getByText(text);
		expect(styledButton).toBeInTheDocument();
	});
});
