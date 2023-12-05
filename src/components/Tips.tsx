import { Cursor, useTypewriter } from 'react-simple-typewriter';

const WORDS = [
	"J'ai tapé mes meilleurs 4/20 dans cette école !",
	"Ca peut pas être pire que le S1 d'AERO3...",
	'Tiens le coup, ça va le faire !',
	'Tu vas y arriver !',
	'Tu es sur la bonne voie',
	'on est tous passé par là ;)',
	'Encore quelques années et tu seras ingénieur !',
	"On aura pas 0 ! On aura 10/20 parce qu'on a révisé.",
];

export const Tips = () => {
	// states
	const [text] = useTypewriter({
		words: WORDS,
		loop: true,
		typeSpeed: 40,
		deleteSpeed: 50,
		delaySpeed: 3_500,
	});

	// render
	return (
		<div className="tips">
			<span className="tips-container">
				{text} <Cursor cursorStyle=">" cursorColor={'red'} />
			</span>
		</div>
	);
};
