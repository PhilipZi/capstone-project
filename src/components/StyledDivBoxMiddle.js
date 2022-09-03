import styled, {css} from 'styled-components';

const StyledDivBoxMiddle = styled.div`
	display: flex;
	position: absolute;
	top: -32px;
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
		variant === 'befor' &&
		css`
			&::before {
				content: '';
				position: absolute;
				top: 60px;
				left: -998px;
				min-width: 1000px;
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
				width: 37.3vw;
				height: 25px;
				border-top-left-radius: 100px;
				background: white;
			}
		`}
`;
export {StyledDivBoxMiddle, StyledIndicator};
