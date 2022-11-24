export default function DestinationCard(dest) {
	// console.log(dest);
	return (
		<div className="select-dest d-flex justify-content-between">
			<div className="dest-img">
				<img className="w-100" src={dest.images.webp} alt={dest.name} />
			</div>
			<div className="dest-desc">
				<div className="dest-details">
					<h2>{dest.name}</h2>
					<p>{dest.description}</p>
				</div>
				<div className="dest-stat d-flex align-items-center">
					<div>
						<span className="d-block">AVG. DISTANCE</span>
						<span className="num d-block">{dest.distance}</span>
					</div>
					<div>
						<span className="d-block">Est. travel time</span>
						<span className="num d-block">{dest.travel}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
