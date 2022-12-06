import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addList({ title, description }));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.columnForm}>
			<span className={styles.inputTitle}>Title:</span>
			<TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
			<span className={styles.inputTitle}>Description:</span>
			<TextInput
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Button>Add list</Button>
		</form>
	);
};

export default ListForm;
