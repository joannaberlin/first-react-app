import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<Container>
				<div className={styles.navElements}>
					<a href='/'>
						<i className='fa fa-tasks'></i>
					</a>
					<ul className={styles.navLinks}>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/favorite'
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
							>
								Favorite
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
							>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
