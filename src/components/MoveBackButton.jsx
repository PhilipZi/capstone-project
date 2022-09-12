import {useRouter} from 'next/router';

import BackArrowIcon from './Icons/BackArrowIcon';
import StyledButton from './StyledButtons';

export default function MoveBackButton() {
	const router = useRouter();
	return (
		<StyledButton
			onClick={() => {
				router.push('/');
			}}
			variant="goback"
		>
			<BackArrowIcon />
		</StyledButton>
	);
}
