import { useQuery } from '@tanstack/react-query';

const fetchProducts = () =>
	fetch('https://dummyjson.com/products').then((res) => res.json());

const useProductsApi = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: fetchProducts,
	});
};

export default useProductsApi;
