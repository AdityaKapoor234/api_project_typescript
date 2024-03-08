type MaxLength = { value: number; message: string };

type MinLength = { value: number; message: string };
type Min = { value: number; message: string };

export type ValidationConstrainType = {
	required?: boolean | string;
	maxLength?: MaxLength;
	minLength?: MinLength;
	min?: Min;
};
