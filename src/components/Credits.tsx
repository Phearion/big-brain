import { Contributor } from './Contributor';

export const Credits = ({
	creditsVisible,
	setCreditsVisible,
}: {
	creditsVisible: boolean;
	setCreditsVisible: any;
	showCredits: boolean;
}) => {
	const contributors = [
		{
			name: 'Zakaria Chaouki',
			role: ', Chef de produit',
			imgLink: '././img/contributors/zakaria.png',
			ghLink: 'https://github.com/PhantHive',
			pseudo: 'PhantHive',
		},
		{
			name: 'Matthias Cadet',
			role: ', Développeur expérimenté',
			imgLink: '././img/contributors/matthias.png',
			ghLink: 'https://github.com/KreatorOf',
			pseudo: 'KreatorOf',
		},
		{
			name: 'Pritam Kantane',
			role: ', Développeur expérimenté',
			imgLink: '././img/contributors/pritam.png',
			ghLink: 'https://github.com/PyyLog',
			pseudo: 'PyyLog',
		},
	];

	const hideCredits = () => {
		const creditsContainer = document.querySelector('.credits-container');
		creditsContainer?.classList.add('hide');
		// eslint-disable-next-line no-restricted-globals
		setTimeout(() => setCreditsVisible(false), 1_000);
	};

	return (
		<div className={`credits-container ${creditsVisible ? 'show' : ''}`}>
			<div className="credits-header">
				<h1 className="credits-title">Crédits</h1>
			</div>

			{contributors.map((contributor, index) => (
				<Contributor key={index} {...contributor} />
			))}

			<div className="white-rectangle" onClick={hideCredits}></div>
		</div>
	);
};
