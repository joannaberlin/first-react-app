import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
// import Favorite from '../Favorite/Favorite';

const Card = (props) => {
	const [isFavorite, setIsFavorite] = useState(props.isFavorite);
	const dispatch = useDispatch();
	const cardId = props.cardId;

	const handleToggle = () => {
		dispatch(toggleFavorite(cardId));
		setIsFavorite((prevState) => !prevState);
	};

	return (
		<li className={styles.card}>
			{props.title}
			<button
				onClick={handleToggle}
				className={clsx(styles.btnFavorite, isFavorite && styles.isFavorite)}
			>
				<i className='fa fa-star-o' />
			</button>
		</li>
	);
};

export default Card;
