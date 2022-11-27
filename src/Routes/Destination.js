import Page from "../Components/Page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import data from "../data";
import DestinationCard from "../Components/DestinationCard";
import { useState } from "react";

export default function Destination() {
	const { destinations } = data;
	const [destin, setDestin] = useState(destinations);
	const renderedDestinations = destin.map((dest) => {
		return (
			<SwiperSlide
				className="d-flex justify-content-between align-items-center"
				key={dest.name}
			>
				<DestinationCard {...dest} />
			</SwiperSlide>
		);
	});

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' + className + '">' + destin[index].name + "</span>"
			);
		},
	};

	return (
		<Page>
			<section className="destination-section bg-style">
				<div className="destination-content">
					<h3>
						<span>01 </span>Pick your destination
					</h3>
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						pagination={pagination}
						modules={[Pagination]}
						className="destination-swiper d-flex justify-content-between align-items-center"
					>
						{renderedDestinations}
					</Swiper>
				</div>
			</section>
		</Page>
	);
}
