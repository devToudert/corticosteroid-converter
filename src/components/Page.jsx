import React from 'react';
import InputList from './InputList';

const page = () => {
	return (
		<>
			<div className="header">
				<h1 className="title">
					<span>CORTICOSTEROID CONVERTER</span>
				</h1>
				<p className="head">
					Cette application permet de calculer les doses équivalentes
					des differentes familles de corticosteroides.
				</p>
			</div>
			<div className="container row">
				<InputList />
			</div>
			<footer className="footer text-center copyright">
				<small>
					By @<a href="https://twitter.com/devtoudert">DevToudert</a>
				</small>
			</footer>
		</>
	);
};

export default page;
