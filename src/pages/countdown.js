import Head from 'next/head';

import MoveBackButton from '../components/MoveBackButton';

export default function CountDown() {
	return (
		<>
			<Head>
				<title key="title">Count Down</title>
				<meta key="description" name="description" content="count down" />
			</Head>
			<MoveBackButton />
			<h1>hallo</h1>
		</>
	);
}
