import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { ValidationConstrainType } from '../../types/ValidationConstrainTypes';

export type PropTypes<T extends FieldValues, V> = {
	displayText: string;
	inputName: Path<T>;
	register: UseFormRegister<T>;
	errorMessage?: string | undefined;
	validationConstrain?: ValidationConstrainType;
	onChangeHandler?: (arg: V) => void;
	stateValue?: V;
};

function TextInputComponent<T extends FieldValues, V>({
	displayText,
	inputName,
	register,
	errorMessage = undefined,
	validationConstrain,
	onChangeHandler = () => {},
	stateValue = undefined,
}: PropTypes<T, V>) {
	return (
		<div className="m-5">
			<label className="form-label">{displayText}</label>
			<input
				type="text"
				className="form-control is-invalid"
				{...register(inputName, { ...validationConstrain })}
				onChange={(e) => {
					if (stateValue) {
						const newState = stateValue;
						newState[inputName] = e.target.value;
						onChangeHandler(newState);
					}
				}}
			/>
			<p className="invalid-feedback">{errorMessage}</p>
		</div>
	);
}

export default TextInputComponent;
