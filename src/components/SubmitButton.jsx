import CheckMarkIcon from './Icons/CheckMarkIcon';
import StyledButton from './StyledButtons';

export default function SubmitButton() {
	return (
		<StyledButton data-testid="submitButton" type="submit" variant="submit">
			<CheckMarkIcon />
		</StyledButton>
	);
}
