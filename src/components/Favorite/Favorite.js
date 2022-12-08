import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
	const favoriteCards = useSelector((state) => getFavoriteCards(state));

	if (favoriteCards.length === 0) return <h2>No cards ...</h2>;
	return (
		<article>
			<PageTitle>Favorite</PageTitle>
			<div className={styles.column}>
				<ul className={styles.cards}>
					{favoriteCards.map((card) => (
						<Card key={card.id} title={card.title} />
					))}
				</ul>
			</div>
		</article>
	);
};

export default Favorite;
