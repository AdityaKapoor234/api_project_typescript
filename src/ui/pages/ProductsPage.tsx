import ProductInformationLayout from '../layouts/ProductInformationLayout';
import { useState } from 'react';
import type { ProductInputTypes } from '../layouts/AddProductFormLayout';
import AddProductFormLayout from '../layouts/AddProductFormLayout';
import {
	useAddProductsMutation,
	useFetchProductsQuery,
} from '../../hooks/useProductsApi';

function ProductsPage() {
	const [newProduct, setNewProduct] = useState({
		productName: '',
		productPrice: 0,
	});

	const updateNewProduct = (data: ProductInputTypes) => {
		setNewProduct({ ...data });
	};

	const { mutate } = useAddProductsMutation();

	const { isLoading, error, data } = useFetchProductsQuery();

	if (isLoading) return <h1 className="h1">Loading ...</h1>;

	if (error) return <h1 className="h1">Error ...</h1>;

	return (
		<>
			<div className="m-5">
				<h1 className="h1">Products Information</h1>
				<ProductInformationLayout products={data.products} />
				<h1 className="h1">Add new products</h1>
				<AddProductFormLayout
					handleSubmitFunc={mutate}
					stateValue={newProduct}
					stateFunc={updateNewProduct}
				/>
			</div>
		</>
	);
}

export default ProductsPage;
