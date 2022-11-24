import logo from "../assets/shared/logo.svg";
import burger from "../assets/shared/icon-hamburger.svg";

export default function Header() {
	return (
		<header>
			<div className="container d-flex justify-content-between align-items-center">
				<div className="logo">
					<a href="#">
						<img className="w-100" src={logo} alt="logo" />
					</a>
				</div>
				<nav className="">
					<ul className="d-flex justify-content-between align-items-center">
						<li>
							<a href="/" className="">
								<span>00 </span>
								<span>HOME</span>
							</a>
						</li>
						<li>
							<a href="" className="">
								<span>01 </span>
								<span>DESTINATION</span>
							</a>
						</li>
						<li>
							<a href="" className="">
								<span>02 </span>
								<span>CREW</span>
							</a>
						</li>
						<li>
							<a href="" className="">
								<span>03 </span>
								<span>TECHNOLOGY</span>
							</a>
						</li>
					</ul>
				</nav>
				<div className="burger">
					<img src={burger} alt="hamburger-menu" />
				</div>
			</div>
		</header>
	);
}
