import styled from 'styled-components';

const StyledNavigationBar = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	justify-content: space-evenly;
	width: 100%;
	height: 65px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	background-color: white;
	box-shadow: 0 -6px 10px -4px rgba(0, 0, 0, 0.49);
`;

export default StyledNavigationBar;
