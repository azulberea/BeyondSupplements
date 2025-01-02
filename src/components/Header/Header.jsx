import styles from "./Header.module.scss"
import DrawerMenu from "../DrawerMenu/DrawerMenu"
import { Link } from "react-router-dom"

const Header = () => {

    return(
        <header className={styles.header}>
        <a href="/"><h1 className={styles.logo}>
            <span>BEYOND</span>
            <span>SUPPLEMENTS</span>
        </h1></a>
        <div className={styles['drawer-menu']}>
            <DrawerMenu/>
        </div>
        <nav className={styles.nav}>
            <ul className={styles['nav-list']}>
                <Link to={'/products'} className={styles['nav-list__item']}> Productos </Link>
                <a className={styles['nav-list__item']}> Carrito </a>
                <a className={styles['nav-list__item']}> Contacto </a>
            </ul>
        </nav>
    </header>
    )

}

export default Header