import StyledInput from './StyledInput';

export default function InputRange({value, onChange, name}) {
	return (
		<StyledInput
			type="range"
			id={name}
			name={name}
			min="00"
			max="59"
			value={value}
			onChange={onChange}
			variant="range"
		/>
	);
}
