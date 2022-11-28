import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'UPDATE_SEARCHSTRING', payload: inputValue });
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput
				placeholder='Search...'
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;
