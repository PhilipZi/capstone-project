import styled, {css} from 'styled-components';

const StyledTimerSpan = styled.span`
	position: absolute;
	top: 50%;
	right: -20px;
	transform: translate(-50%, -50%);
	font-size: 3rem;
	${({running}) =>
		running &&
		css`
			right: -40px;
			border-radius: 16px;
			padding-left: 5px;
			padding-right: 5px;
			box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.4);
			border: 6px solid red;
		`}
`;

export default StyledTimerSpan;
