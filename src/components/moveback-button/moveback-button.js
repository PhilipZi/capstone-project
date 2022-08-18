import {useRouter} from 'next/router';

import BackArrow from '../../../public/Icons/BackArrow';

export default function Moveback() {
	const router = useRouter();
	return (
		<header>
			<button onClick={() => router.back()}>
				<BackArrow />
			</button>
		</header>
	);
}
