import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.wrapper}>
            <Link className={classes.link} to='/tasks'>
                <li className={classes.item}>Tasks</li>
            </Link>
            <Link className={classes.link} to='/done'>
                <li className={classes.item}>Done</li>
            </Link>
        </div>
    );
}
 
export default NavBar;