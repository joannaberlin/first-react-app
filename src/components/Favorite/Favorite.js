import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {
	const favoriteCards = useSelector((state) => getFavoriteCards(state));

	//ten komponent nie ma wykonuje akcji, czemu? Nie ma do nich dostępu? Jak ma mieć dostęp?
	//akcja się odpala w toolsach widać, ale nie wykonuje się w storze, nie zmienia danych

	if (favoriteCards.length === 0) return <h2>No cards ...</h2>;
	return (
		<article>
			<PageTitle>Favorite</PageTitle>
			<div className={styles.column}>
				<ul className={styles.cards}>
					{favoriteCards.map((card) => (
						<Card
							key={card.id}
							title={card.title}
							cardId={card.id}
							isFavorite={card.isFavorite}
						/>
					))}
				</ul>
			</div>
		</article>
	);
};

export default Favorite;
