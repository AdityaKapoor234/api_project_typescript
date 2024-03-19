import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductInputTypes } from '../ui/layouts/AddProductFormLayout';

const fetchProductsApi = () =>
	fetch('https://dummyjson.com/products').then((res) => res.json());

const addProductsApi = (product: ProductInputTypes) =>
	fetch('https://dummyjson.com/products/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			// title: product.productName,
			// price: product.productPrice,
			brand: product.brand,
			category: product.category,
			description: product.description,
			discountPercentage: product.discountPercentage,
			id: product.id,
			images: product.images,
			price: product.price,
			rating: product.rating,
			stock: product.stock,
			thumbnail: product.thumbnail,
			title: product.title,
		}),
	}).then((res) => res.json());

const useFetchProductsQuery = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: fetchProductsApi,
	});
};

const useAddProductsMutation = () => {
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

export { useAddProductsMutation, useFetchProductsQuery };
