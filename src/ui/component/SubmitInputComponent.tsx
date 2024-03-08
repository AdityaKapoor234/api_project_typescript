export type PropType = {
	displayText: string;
};

function SubmitInputComponent({ displayText }: PropType) {
	return (
		<button className="btn btn-primary m-5" type="submit">
			{displayText}
		</button>
	);
}

export default SubmitInputComponent;
