/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
	font-size: 4rem;
`;

describe('Timer component', () => {
	it('should render children', () => {
		const text = 'Set Pause';
		render(<StyledH2>{text}</StyledH2>);
		const timer = screen.getByText(text);
		expect(timer).toBeInTheDocument();
	});
});
