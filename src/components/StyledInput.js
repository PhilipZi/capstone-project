import styled, {css} from 'styled-components';

const StyledInput = styled.input`
	${({variant}) =>
		variant === 'range' &&
		css`
			transform: rotate(-90deg);
			cursor: pointer;
			width: 170px;
			background-color: transparent;

    -webkit-appearance: none;
}
::-webkit-slider-runnable-track {

	height: 6.5px;
    background: white;
	border-radius: 25px;
    border: solid black 1.8px;
}
::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: white 2px solid;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: grey;
    margin-top: -6px;
}
:focus {
    outline: none;
}
:focus::-webkit-slider-runnable-track {
    background: white;
}
::-moz-range-track {
	width: 180px;
	height: 6.5px;
    background: white;
	border-radius: 25px;
    border: solid black 1.8px;
}
::-moz-range-thumb {
    border: white 2px solid;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: grey;
    margin-top: -6px;
}
:-moz-focusring{
    outline: 1px solid white;
    outline-offset: -1px;
}
:focus::-moz-range-track {
    background: white;


	`}

	${({variant}) =>
		variant === 'counter' &&
		css`
			border: none;
			background-color: transparent;
			padding-right: 1px;
			padding-left: 1px;
			font-size: 80px;
			width: 130px;
			text-align: center;
		`}
		${({variant}) =>
		variant === 'savename' &&
		css`
			padding: 3px;
			min-width: 250px;
			font-size: 18px;
			border-width: 1px;
			border-radius: 12px;
			box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.49);
		`}
`;

export default StyledInput;
