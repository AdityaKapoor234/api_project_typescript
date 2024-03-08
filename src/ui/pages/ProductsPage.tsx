import { useQuery } from '@tanstack/react-query';
import ProductInformationLayout from '../layouts/ProductInformationLayout';

function ProductsPage() {
	const { isLoading, error, data } = useQuery({
		queryKey: ['products'],
		queryFn: () =>
			fetch('https://dummyjson.com/products').then((res) => res.json()),
	});

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
