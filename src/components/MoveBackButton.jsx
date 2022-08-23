import {useRouter} from 'next/router';

import BackArrow from './Icons/BackArrow';
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
			<BackArrow />
		</StyledButton>
	);
}
