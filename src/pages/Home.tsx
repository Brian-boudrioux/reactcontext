import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type Product from "../interfaces/product";
import { useBasket } from "../context/basket";
import { useTheme } from "../context/theme";

function Home() {
	const [products, setProducts] = useState<Product[]>([]);
	const { setBasket } = useBasket();
	const { setTheme } = useTheme();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then(({ products }) => setProducts(products));
	}, []);

	function addToBasket(product: Product) {
		setBasket((prevState) => [...prevState, product]);
	}

	return (
		<main>
			<button type="button" onClick={() => setTheme("dark")} onKeyUp={() => setTheme("dark")}>
				Dark
			</button>
			<button
				type="button"
				onClick={() => setTheme("light")}
				onKeyUp={() => setTheme("light")}
			>
				Light
			</button>
			{products.map((product: Product) => {
				return (
					<article
						key={product.id}
						onClick={() => navigate(`/products/${product.id}`)}
						onKeyUp={() => navigate(`/products/${product.id}`)}
						className="dark"
					>
						<p>{product.title}</p>
						<p>{product.price}</p>
						<button
							type="button"
							onClick={() => addToBasket(product)}
							onKeyUp={() => addToBasket(product)}
						>
							Ajouter au panier
						</button>
					</article>
				);
			})}
		</main>
	);
}

export default Home;
