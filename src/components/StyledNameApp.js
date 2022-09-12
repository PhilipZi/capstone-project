import styled from 'styled-components';

const StyledNameApp = styled.h1`
	font-family: 'Bungee Shade', sans-serif;
	font-size: 3rem;
	color: white;

	text-align: center;
	&::before {
		content: '';
		position: absolute;
		top: 8%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, 50%);
	}
`;
export default StyledNameApp;
