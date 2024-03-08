export type ProductType = { id: number; title: string; price: number };

export type PropTypes = {
	products: ProductType[];
};

function ProductInformationLayout({ products }: PropTypes) {
	return (
		<>
			{products.map((product) => {
				return (
					<div className="m-5">
						<h2 className="h2">{product.title}</h2>
						<h3 className="h3">{`INR:${product.price}`}</h3>
					</div>
				);
			})}
		</>
	);
}

export default ProductInformationLayout;
