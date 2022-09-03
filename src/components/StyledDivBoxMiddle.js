import styled from 'styled-components';

const StyledDivBoxMiddle = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 50%;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: 110px;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background-color: #79d6ff;
	box-shadow: inset 0 -6px 10px -4px rgba(0, 0, 0, 0.49);
`;

export default StyledDivBoxMiddle;
