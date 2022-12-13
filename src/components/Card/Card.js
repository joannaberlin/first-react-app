import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = (props) => {
	const [isFavorite, setIsFavorite] = useState(props.isFavorite);
	const dispatch = useDispatch();
	const cardId = props.cardId;

	const handleToggle = () => {
		dispatch(toggleFavorite(cardId));
		setIsFavorite((prevState) => !prevState);
	};

	const handleDelete = () => {
		dispatch(removeCard(cardId));
	};

	return (
		<li className={styles.card}>
			{props.title}
			<div>
				<button
					onClick={handleToggle}
					className={clsx(styles.btnFavorite, isFavorite && styles.isFavorite)}
				>
					<i className='fa fa-star-o' />
				</button>
				<button onClick={handleDelete} className={styles.btnTrash}>
					<i className='fa fa-trash' />
				</button>
			</div>
		</li>
	);
};

export default Card;
