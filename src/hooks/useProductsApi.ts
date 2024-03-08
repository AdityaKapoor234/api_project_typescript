import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductInputTypes } from '../ui/layouts/AddProductFormLayout';

const fetchProducts = () =>
	fetch('https://dummyjson.com/products').then((res) => res.json());

const addProductsApi = (product: ProductInputTypes) =>
	fetch('https://dummyjson.com/products/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: product.productName,
			price: product.productPrice,
		}),
	}).then((res) => res.json());

const useProductsApi = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: fetchProducts,
	});
};

const useAddProducts = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addProductsApi,
		onSuccess: (data) => {
			queryClient.setQueryData(['products'], (oldQueryData) => {
				return {
					...oldQueryData,
					products: [...oldQueryData.products, data],
				};
			});
		},
	});
};

export default useProductsApi;
export { useAddProducts };
