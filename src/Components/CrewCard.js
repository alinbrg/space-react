export default function CrewCard(props) {
	return (
		<>
			<div class="info">
				<span class="d-block">{props.role}</span>
				<h2>{props.name}</h2>
				<p>{props.bio}</p>
				{/* { props.images.png } */}
			</div>

			<div class="crew-img">
				<img src={props.images.png} alt={props.name} />
			</div>
		</>
	);
}
