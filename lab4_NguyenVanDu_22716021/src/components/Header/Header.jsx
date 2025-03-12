import Logo from '../../assets/img/Lab_02/chefify.png';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className='flex'>
                <nav className='brand'>
                    <img src={Logo} alt="logo" />
                    <ul>
                        <li>
                            <Link to='/'>What to cook</Link>
                        </li>
                        <li>
                            <Link to='/Recipes'>Recipes</Link>
                        </li>
                        <li>
                            <Link to='/Ingredients'>Ingredients</Link>
                        </li>
                        <li>
                            <Link to='/Occasions'>Occasions</Link>
                        </li>
                        <li>
                            <Link to='/AboutUs'>About Us</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header;