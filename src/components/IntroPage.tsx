import { Cursor, useTypewriter } from 'react-simple-typewriter';

export const IntroPage = () => {
	// states
	const [text] = useTypewriter({
		words: ['Phearion présente ...'],
		loop: false,
		typeSpeed: 40,
		deleteSpeed: 0,
		delaySpeed: 5_000,
	});

	return (
		<div className="intro-page">
			<div className="intro">
				<img className="phearion-logo" src={'././img/phearion.png'} alt="phearion-logo" />
				<span className="catchphrase">
					{text} <Cursor cursorStyle=">" cursorColor={'white'} />
				</span>
			</div>
		</div>
	);
};
