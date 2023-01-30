import style from './Header.module.css';
import owl from './logo/owl.png';
const Header = () => {
    return (
        <div className={style.header}>
            <img src={owl} className={style.logo} alt='logo'/>
             <h2>Header the main Public</h2>
        </div>
    )
}

export default Header;