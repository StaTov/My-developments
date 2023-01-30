import style from './Header.module.css';
import owl from './logo/owl.png';
const Header = () => {
    return (
        <div className={style.header}>
            <img src={owl} className={style.logo} alt='logo'/>
             <h2 className={style.title}>Men Freedom Brain </h2>

        </div>
    )
}

export default Header;