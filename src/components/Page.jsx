import React from 'react';
import InputList from './inputList';

const page = () => {
	return (
		<>
			<div className="header">
				<h1 className="title">CORTICOSTEROID CONVERTER</h1>
				<p className="head">
					Cette application permet de calculer les doses équivalentes
					des differentes familles de corticosteroides.
				</p>
			</div>
			<InputList />
			<div className="footer">
				<p>
					By:
					<i>
						<a href="https://twitter.com/devtoudert">DevToudert</a>
					</i>
					For:
					<i>
						<a href="https://pediatre-bouira.com/docteur-guezoui">
							Dr GUEZOUI
						</a>
					</i>
				</p>
			</div>
		</>
	);
};

export default page;
