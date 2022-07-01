import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
	const couter = useSelector((state) => state).counter;
	const dispatch = useDispatch();
	return (
		<>
			<div>{couter}</div>
			<button
				onClick={() => {
					dispatch({ type: 'DECREMENT' });
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'INCREMENT' });
				}}
			>
				+
			</button>
		</>
	);
};
