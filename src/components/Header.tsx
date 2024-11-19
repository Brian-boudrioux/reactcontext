import { useState } from "react";
import { useBasket } from "../context/basket";
import { useTheme } from "../context/theme";
import Nav from "./Nav";
import Basket from "./Basket";

function Header() {
	 const [showBasket, setShowBasket] = useState(false);
	 const { basket } = useBasket();
	 const { theme } = useTheme();

   const toggleDisplay = () => {
    setShowBasket(!showBasket)
   }

		return (
			<header className={theme}>
				<h1>dealsApp</h1>
				<Nav />
				<p onClick={toggleDisplay} onKeyUp={toggleDisplay}>{basket?.length}</p>
				{showBasket && <Basket />}
			</header>
		);
}

export default Header;