import React from 'react';
import { Header } from './components/Header/index';
import { Counter } from './components/Counter/index';
import { createStore } from 'redux';
import { CountReducer } from './reducers/CountReducer';
import { Provider } from 'react-redux';

export const App = () => {
	const store = createStore(CountReducer);

	return (
		<>
			<Provider store={store}>
				<Header />
				<Counter />
			</Provider>
		</>
	);
};
