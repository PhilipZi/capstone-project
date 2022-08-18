import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		height: 100%;
		margin: 0;
		font-size: 1rem;
	}
	main{
		height: 100vh;
	}
`;
