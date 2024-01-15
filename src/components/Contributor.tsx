export const Contributor = ({
	name,
	role,
	imgLink,
	ghLink,
	pseudo,
}: {
	ghLink: string;
	imgLink: string;
	name: string;
	pseudo: string;
	role: string;
}) => {
	return (
		<div className="credits-contributor">
			<div className="contributor-img-container">
				<img className="contributor-img" src={imgLink} alt={`${name}-img`} />
			</div>

			<div className="contributor-info-container">
				<div className="contributor-description">
					<div className="contributor-name">
						<h3>{name}</h3>
					</div>

					<div className="contributor-role">
						<p>{role}</p>
					</div>
				</div>

				<div className="contributor-links">
					<img className="sn-icon" src="././img/github.png" alt="github-icon" />
					<a className="gh-link" href={ghLink}>
						{pseudo}
					</a>
				</div>
			</div>
		</div>
	);
};
