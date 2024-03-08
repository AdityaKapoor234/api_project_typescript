import { useForm, SubmitHandler } from 'react-hook-form';
import TextInputComponent from '../component/TextInputComponent';
import NumberInputComponent from '../component/NumberInputComponent';

export type ProductInputTypes = {
	productName: string;
	productPrice: number;
};

export type AddProductFormLayoutPropTypes = {
	handleSubmitFunc: (arg: ProductInputTypes) => void;
};

function AddProductFormLayout({
	handleSubmitFunc,
}: AddProductFormLayoutPropTypes) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProductInputTypes>();

	const onSubmit: SubmitHandler<ProductInputTypes> = (data) => {
		handleSubmitFunc(data);
	};

	return (
		<div className="m-5">
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInputComponent
					register={register}
					displayText="Name"
					inputName="productName"
					validationConstrain={{ required: 'This field is required' }}
					errorMessage={errors.productName?.message?.toString()}
				/>

				<NumberInputComponent
					register={register}
					displayText="Price"
					inputName="productPrice"
					validationConstrain={{
						required: 'This field is required',
						min: { value: 1, message: 'The minimum price is INR:1' },
					}}
				/>
			</form>
		</div>
	);
}

export default AddProductFormLayout;
