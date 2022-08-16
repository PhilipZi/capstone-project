import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Moveback() {
	const router = useRouter();
	return (
		<header>
			<button onClick={() => router.back()}>Back</button>
			<nav>
				<Link href="/">
					<a></a>
				</Link>
			</nav>
		</header>
	);
}
