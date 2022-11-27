import Page from "../Components/Page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import "swiper/css/pagination";
import data from "../data";
import CrewCard from "../Components/CrewCard";
import { useState } from "react";

export default function Crew() {
	const { crew } = data;

	const [crewData, setCrewData] = useState(crew);

	const renderedCrew = crewData.map((crewMember) => {
		return (
			<SwiperSlide
				className="d-flex crew-card justify-content-between align-items-center"
				key={crewMember.name}
			>
				<CrewCard {...crewMember} />
			</SwiperSlide>
		);
	});

	const pagination = {
		clickable: true,
	};

	return (
		<Page>
			<section class="crew-slider bg-style p-absolute">
				<div className="crew-content">
					<h3>
						<span>02 </span>Meet Your Crew
					</h3>

					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						pagination={pagination}
						clickable={true}
						modules={[Pagination]}
					>
						{renderedCrew}
					</Swiper>
				</div>
			</section>
		</Page>
	);
}
