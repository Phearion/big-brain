export function Request({ counter }: { counter: number }) {
	// render
	return (
		<div className="request-number">
			<label>Nombre de requêtes : {counter}</label>
		</div>
	);
}
