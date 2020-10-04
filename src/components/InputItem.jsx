import React from 'react';

// class InputItem extends Component {
const InputItem = (props) => {
	let handleChange = (e) => {
		props.onDoseChange(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="col-6 row">
				<div className="col-8">
					<label htmlFor="ctc"> {props.label} </label>
				</div>
				<div className="col-4">
					<input
						onChange={handleChange}
						value={props.dose}
						type="number"
						name="ctc"
						id="ctc"
						min="0"
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InputItem;
