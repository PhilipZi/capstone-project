import CheckMark from './Icons/CheckMark';
import StyledButton from './StyledButtons';

export default function SubmitButton() {
	return (
		<StyledButton type="submit" variant="submit">
			<CheckMark />
		</StyledButton>
	);
}
