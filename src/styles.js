import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: url('/fonts/roboto-v30-latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/roboto-v30-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v30-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v30-latin-100.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v30-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v30-latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/roboto-v30-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/roboto-v30-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v30-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v30-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v30-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v30-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
}
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
		font-family:'Roboto',sans-serif;
		font-size: 1rem;
	}
	main{
		min-height: 100%;
	}
`;
