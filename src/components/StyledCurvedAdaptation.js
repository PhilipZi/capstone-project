import styled, {css} from 'styled-components';

const StyledCurvedAdaptation = styled.div`
	position: relative;
	width: 100vw;
	height: 100px;
	overflow: hidden;
	background-color: #79d6ff;
`;

const StyledBoxCountdownButton = styled.div`
	display: flex;
	position: absolute;
	top: 50px;
	left: 50%;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	transform: translate(-50%, -50%);
	border-radius: 30px;
	background-color: #79d6ff;
`;

const StyledIndicator = styled.div`
	${({variant}) =>
		variant === 'before' &&
		css`
			&::before {
				content: '';
				position: absolute;
				top: 60px;
				left: -1998px;
				min-width: 2000px;
				height: 25px;
				border-top-right-radius: 100px;
				background: white;
			}
		`}
	${({variant}) =>
		variant === 'after' &&
		css`
			&::after {
				content: '';
				position: absolute;
				top: 60px;
				left: 98px;
				width: 100vw;
				height: 25px;
				border-top-left-radius: 100px;
				background: white;
			}
		`}
		${({variant}) =>
		variant === 'whiteline' &&
		css`
			&::after {
				content: '';
				position: absolute;
				top: 80px;
				width: 100vw;
				height: 25px;
				background: white;
			}
		`}
`;
export {StyledBoxCountdownButton, StyledIndicator, StyledCurvedAdaptation};
