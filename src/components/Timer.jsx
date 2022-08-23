import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-size: 1.5cm;
`;

export default function Timer({minutes, seconds}) {
	return (
		<StyledH1>
			{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
		</StyledH1>
	);
}
