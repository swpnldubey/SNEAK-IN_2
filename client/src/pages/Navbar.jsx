import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes  } from "react-icons/fa";
import "../index.css";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
 
	return (
		<header>
			{/* <h3>LOGO</h3> */}
      <h1> <a href="/"> SNEAK IN </a> </h1>
			<nav ref={navRef}>
            <a className="active" href="/">SNEAK IN</a>
            <a href="/college">Colleges</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
