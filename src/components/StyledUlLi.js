import styled from 'styled-components';

const StyledLi = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 200px;
	padding-right: 5px;
	list-style: none;
`;

const StyledUl = styled.ul`
	display: flex;
	width: 100%;
	padding-left: 4%;
	border-top: solid grey;
	border-width: 1.5px;
`;

const StyledSpan = styled.span`
	color: grey;
`;

const StyledA = styled.a`
	display: flex;
	align-items: flex-start;
	color: red;
`;
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

export {StyledLi, StyledUl, StyledSpan, StyledA, StyledDiv};