import styled, {css} from 'styled-components';

const StyledDumbbellIcon = styled.div`
	${({variant}) =>
		variant === 'rotated' &&
		css`
			transform: rotate(90deg);
		`}
`;

export default StyledDumbbellIcon;
