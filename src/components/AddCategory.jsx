import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

	

	const [inputValue, setInputValue] = useState('');

	// en el parametro Target estoy haciendo una desustruraccion de datos, event.target
	const onInputChanged = ( { target } ) => {
		setInputValue(target.value);
	}

	const onSubmit = ( event ) => {
		event.preventDefault();

		const newInputValue = inputValue.trim();
		if (newInputValue.length <= 1 ) return;
		onNewCategory( newInputValue );
		setInputValue('');
	}

	return (
		<form onSubmit={ onSubmit }>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={ inputValue }
				onChange={ onInputChanged }
			/>
		</form>
	)
}
