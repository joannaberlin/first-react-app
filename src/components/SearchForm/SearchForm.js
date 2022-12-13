import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	updateSearchString,
	getSearchString,
} from '../../redux/searchStringRedux';

const SearchForm = () => {
	const dispatch = useDispatch();
	const searchString = useSelector((state) => getSearchString(state));
	const [inputValue, setInputValue] = useState(searchString);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateSearchString(inputValue));
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput
				placeholder='Search...'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;
