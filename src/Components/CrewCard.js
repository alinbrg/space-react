export default function CrewCard(props) {
	return (
		<>
			<div className="info">
				<span className="d-block">{props.role}</span>
				<h2>{props.name}</h2>
				<p>{props.bio}</p>
				{/* { props.images.png } */}
			</div>

			<div className="crew-img">
				<img src={props.images.png} alt={props.name} />
			</div>
		</>
	);
}
