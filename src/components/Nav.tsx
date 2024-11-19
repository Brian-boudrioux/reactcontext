import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Nos produits</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;