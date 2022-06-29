import React from 'react';
import { useSelector } from 'react-redux';

export const Header = ({}) => {
	const couter = useSelector((state) => state);

	return (
		<>
			<div>
				<h3>Counter</h3>
				<div>{couter}</div>
			</div>
		</>
	);
};
