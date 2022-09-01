import {useRouter} from 'next/router';

import SaveIconGrey from './Icons/SaveIconGrey';
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
			<SaveIconGrey />
		</StyledButton>
	);
}
