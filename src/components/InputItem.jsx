import React from 'react';

const inputItem = () => {
	return (
		<React.Fragment>
			<div className="col-6 row">
				<div className="col-8">
					<label htmlFor="ctc"> corticoide </label>
				</div>
				<div className="col-4">
					<input type="number" name="ctc" id="ctc" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default inputItem;
