import Page from "../Components/Page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import data from "../data";
import TechnologyCard from "../Components/TechnologyCard";
import { useState } from "react";
export default function Technology() {
	const { technology } = data;

	const [technologyData, setTechnologyData] = useState(technology);

	const renderedTechnology = technologyData.map((tech) => {
		return (
			<SwiperSlide
				className="d-flex tech-card justify-content-between align-items-center"
				key={tech.name}
			>
				<TechnologyCard {...tech} />
			</SwiperSlide>
		);
	});

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};
	return (
		<Page>
			<section className="technology-section bg-style">
				<div className="tech-content">
					<h3>
						<span>03 </span>SPACE LAUNCH 101
					</h3>
					<Swiper
						slidesPerView={1}
						spaceBetween={100}
						pagination={pagination}
						modules={[Pagination]}
						className="d-flex justify-content-between align-items-center"
					>
						{renderedTechnology}
					</Swiper>
				</div>
			</section>
		</Page>
	);
}
