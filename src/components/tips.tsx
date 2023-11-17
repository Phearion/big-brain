import { Cursor, useTypewriter } from 'react-simple-typewriter';

const WORDS = [
	"j'ai tapé mes meilleurs 4/20 dans cette école !",
	"ça peut pas être pire que le S1 d'AERO3...",
	'tiens le coup, ça va le faire !',
	'tu vas y arriver !',
	'tu es sur la bonne voie',
	'on est tous passé par là ;)',
	'encore quelques années et tu seras ingénieur !',
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
