export default function TechnologyCard(props) {
	return (
		<>
			<div className="info">
				<span className="d-block">THE TERMINOLOGY…</span>
				<h2>{props.name}</h2>
				<p>{props.description}</p>
			</div>

			<div className="tech-img">
				<img src={props.images.portrait} alt={props.name} />
			</div>
		</>
	);
}
