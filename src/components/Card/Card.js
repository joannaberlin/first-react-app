import styles from './Card.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { toggleFavorite, getFavoriteCards } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
// import Favorite from '../Favorite/Favorite';

const Card = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const favoriteCards = useSelector((state) => getFavoriteCards(state));
	const dispatch = useDispatch();
	const cardId = props.cardId;
	// let isFavorite = false;
	console.log(favoriteCards);

	useEffect(() => {
		setIsFavorite(JSON.parse(window.localStorage.getItem('isFavorite')));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('isFavorite', isFavorite);
	}, [isFavorite]);

	//get isFavorite from state and make class on that
	// const addFavoriteClass = () => {
	// 	for (let card of favoriteCards) {
	// 		if (card.isFavorite) {
	// 			console.log(card.isFavorite);
	// 			isFavorite = true;
	// 		}
	// 	}
	// };

	// addFavoriteClass();

	const handleToggle = () => {
		dispatch(toggleFavorite(cardId));
		setIsFavorite(isFavorite);
	};

	return (
		<li className={styles.card}>
			{props.title}
			<button
				onClick={handleToggle}
				className={clsx(styles.btnFavorite, isFavorite && styles.isFavorite)}
				// className={clsx(styles.btnFavorite)}
			>
				<i className='fa fa-star-o' />
			</button>
		</li>
	);
};

export default Card;
