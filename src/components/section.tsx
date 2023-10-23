import { Cursor, useTypewriter } from 'react-simple-typewriter';

export function Section() {
	// states
	const [text] = useTypewriter({
		words: [
			"j'ai tapé mes meilleurs 4/20 dans cette école !",
			"ça peut pas être pire que le S1 d'AERO3...",
			'tiens le coup, ça va le faire !',
			'tu vas y arriver !',
			'tu es sur la bonne voie',
			'on est tous passé par là ;)',
			'encore quelques années et tu seras ingénieur !',
		],
		loop: true,
		typeSpeed: 40,
		deleteSpeed: 50,
		delaySpeed: 3_500,
	});

	// effects

	// render
	return (
		<div className="title-slogan">
			<h1 className="bb-title">Big Brain</h1>
			<p className="slogan">Par les étudiants, pour les étudiants</p>
			<span className="tips">{text}</span>
			<span style={{ color: 'red' }}>
				<Cursor cursorStyle="/" />
			</span>
		</div>
	);
}
