import logo from "../assets/shared/logo.svg";
import burger from "../assets/shared/icon-hamburger.svg";
import burgerClose from "../assets/shared/icon-close.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
	const [burgIconSrc, setBurgerIconSrc] = useState(burger);
	const [navClass, setNavClass] = useState("");
	const [closeBurger, setCloseBurger] = useState("");

	function handleBurgerClick(e) {
		// console.log(e.target);
		// e.target.src = burgerClose;
		if (!closeBurger) {
			setCloseBurger("active");
			setBurgerIconSrc(burgerClose);
			setNavClass("active");
		} else {
			setCloseBurger("");
			setBurgerIconSrc(burger);
			setNavClass("");
		}
	}

	return (
		<header>
			<div className="container d-flex justify-content-between align-items-center">
				<div className="logo">
					<Link to="/">
						<img className="w-100" src={logo} alt="logo" />
					</Link>
				</div>
				<nav className={navClass}>
					<ul className="d-flex justify-content-between align-items-center">
						<li>
							<NavLink to="/">
								<span>00 </span>
								<span>HOME</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/destination">
								<span>01 </span>
								<span>DESTINATION</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/crew">
								<span>02 </span>
								<span>CREW</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/technology">
								<span>03 </span>
								<span>TECHNOLOGY</span>
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="burger">
					<img
						className={closeBurger}
						src={burgIconSrc}
						alt="hamburger-menu"
						onClick={handleBurgerClick}
					/>
				</div>
			</div>
		</header>
	);
}
