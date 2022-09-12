import CheckMarkIcon from './Icons/CheckMarkIcon';
import StyledButton from './StyledButtons';

export default function SubmitButton() {
	return (
		<StyledButton type="submit" variant="submit">
			<CheckMarkIcon />
		</StyledButton>
	);
}
