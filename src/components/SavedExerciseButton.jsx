import Link from 'next/link';

import SaveIcon from './Icons/SaveIcon';
import StyledButton from './StyledButtons';

export default function SavedExerciseButton() {
	return (
		<Link href="saved-exercises">
			<a>
				<StyledButton>
					<SaveIcon />
				</StyledButton>
			</a>
		</Link>
	);
}
