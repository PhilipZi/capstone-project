import styled, {css} from 'styled-components';

const StyledDivBoxLeftRight = styled.div`
	position: absolute;
	top: -40px;
	min-width: 200px;
	height: 400px;
	border-radius: 25px;
	background-color: red;
	${({variant}) =>
		variant === 'left' &&
		css`
			left: -20px;
		`}
	${({variant}) =>
		variant === 'right' &&
		css`
			right: -20px;
		`}
`;

export default StyledDivBoxLeftRight;
