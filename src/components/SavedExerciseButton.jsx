import {useRouter} from 'next/router';

import SaveIcon from './Icons/SaveIcon';
import StyledButton from './StyledButtons';

export default function SavedExerciseButton() {
	const router = useRouter();
	return (
		<StyledButton
			variant="saved"
			onClick={() => {
				router.push('saved-exercises');
			}}
		>
			<SaveIcon />
		</StyledButton>
	);
}
