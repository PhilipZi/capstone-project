import StyledInputRange from './styledInputRange';

export default function RangeBar({value, setValue, name}) {
	return (
		<StyledInputRange
			type="range"
			id={name}
			name={name}
			min="00"
			max="59"
			value={value}
			onChange={event => {
				setValue(Number(event.target.value));
			}}
		/>
	);
}
