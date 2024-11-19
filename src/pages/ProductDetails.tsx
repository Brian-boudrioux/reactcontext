import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type Product from "../interfaces/product";

function ProductDetails() {
  const { productId } = useParams();
	const [product, setProduct] = useState<Product>();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${productId}`)
			.then((res) => res.json())
			.then((product) => setProduct(product));
	}, [productId]);

	function addToBasket(product: Product) {
    console.info(product);
		// todo
	}

	return (
		<div key={product?.id}>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<button type="button" onClick={() => product && addToBasket(product)}>
				Ajouter au panier
			</button>
		</div>
	);
}

export default ProductDetails;
