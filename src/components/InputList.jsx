// import React from 'react';
// import InputItem from './InputItem';

// const inputList = () => {
// 	return (
// 		<div className="container row">
// 			<InputItem />
// 		</div>
// 	);
// };

// export default inputList;
import React, { Component } from 'react';
import InputItem from './InputItem';

class InputList extends Component {
	state = {
		corticosteroid: [
			{ id: 1, equivalence: 1, label: 'PREDNISONE', dose: 1 },
			{ id: 2, equivalence: 5, label: 'CORTISONE', dose: 5 },
			{ id: 3, equivalence: 4, label: 'HYDROCORTISONE', dose: 4 },
			{ id: 4, equivalence: 1, label: 'PREDNISOLONE', dose: 1 },
			{
				id: 5,
				equivalence: 0.8,
				label: 'METHYLPREDNISOLONE',
				dose: 0.8,
			},
			{ id: 6, equivalence: 0.8, label: 'TRIAMCINOLONE', dose: 0.8 },
			{ id: 7, equivalence: 0.4, label: 'PARAMETHASONE', dose: 0.4 },
			{ id: 8, equivalence: 0.15, label: 'BETAMETHASONE', dose: 0.15 },
			{ id: 9, equivalence: 0.15, label: 'DEXAMETHASONE', dose: 0.15 },
			{ id: 10, equivalence: 0.06, label: 'CORTIVAZOLE', dose: 0.06 },
		],
	};

	handleCtcChange = (ctc, doseChange) => {
		let updatedCorticosteroidState = [...this.state.corticosteroid];
		// TODO add parsFloat
		updatedCorticosteroidState[ctc.id - 1].dose = doseChange;

		// ALGORITHM: dose calculée = dose du champs modifié / equivalence champs modifié * equivalence champs calculé

		updatedCorticosteroidState.map((c) => {
			let result = (ctc.dose / ctc.equivalence) * c.equivalence;
			if (Number.isNaN(parseFloat(doseChange))) {
				return '';
			}
			// Deux nombres apres la virgule
			return (c.dose = Math.round(parseFloat(result) * 100) / 100);
		});

		// Update state
		this.setState({ corticosteroid: updatedCorticosteroidState });
		// console.log(`
		//     ctc.id = ${ctc.id} && ctc.label = ${ctc.label}  &&  doseChange = ${doseChange}
		// `);
	};
	render() {
		return this.state.corticosteroid.map((ctc) => {
			return (
				<InputItem
					key={ctc.id}
					label={ctc.label}
					dose={ctc.dose}
					onDoseChange={(doseChange) =>
						this.handleCtcChange(ctc, doseChange)
					}
				/>
			);
		});
	}
}

export default InputList;
