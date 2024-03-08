import ProductInformationLayout from '../layouts/ProductInformationLayout';
import useProductsApi from '../../hooks/useProductsApi';

function ProductsPage() {
	const { isLoading, error, data } = useProductsApi();

	if (isLoading) return <h1 className="h1">Loading ...</h1>;

	if (error) return <h1 className="h1">Error ...</h1>;

	return (
		<>
			<div className="m-5">
				<h1>Products Information</h1>
				<ProductInformationLayout products={data.products} />
			</div>
		</>
	);
}

export default ProductsPage;
