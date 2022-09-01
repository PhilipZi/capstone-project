import {useState} from 'react';

export default function Screen() {
	const [list, setList] = useState([]);

	function _onCreate(item) {
		setList(prev => prev.concat({...item, id: Math.random().toString(36).slice(2)}));
	}

	return (
		<>
			<Toolbar onCreate={_onCreate} />
			<div />
			<Configuration list={list} />
		</>
	);
}

const currentExercises = [
	{name: `excercise`, timer: 100},
	{name: `repetition`, value: 200},
	{name: `pause`},
];

function Toolbar({onCreate}) {
	return currentExercises.map(v => (
		<div key={v.name} onClick={() => onCreate(v)}>
			{v.name}
		</div>
	));
}

const map = {
	excercise: Excercise,
	repetition: Repetition,
	pause: Pause,
};

function Configuration({list}) {
	return list.map(v => {
		const Component = map[v.name];

		return Component ? <Component data={v} /> : `Not found`;
	});
}

function Pause() {
	return <div>Pause</div>;
}

function Repetition({data}) {
	return <div>Repetition ({data.value})</div>;
}

function Excercise({data}) {
	return <div>Excercise ({data.timer})</div>;
}
