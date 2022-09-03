import styled, {css} from 'styled-components';

const StyledDivBoxLeftRight = styled.div`
	position: absolute;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: red;
	${({variant}) =>
		variant === 'left' &&
		css`
			left: 10%;
		`}
	${({variant}) =>
		variant === 'right' &&
		css`
			top: -5%;
			right: 10%;
		`}
`;

export default StyledDivBoxLeftRight;
