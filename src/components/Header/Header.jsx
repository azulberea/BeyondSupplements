import styles from "./Header.module.scss"
import DrawerMenu from "../DrawerMenu/DrawerMenu"

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
                <a className={styles['nav-list__item']} href="products.html"> Productos </a>
                <a className={styles['nav-list__item']}> Carrito </a>
                <a className={styles['nav-list__item']}> Contacto </a>
            </ul>
        </nav>
    </header>
    )

}

export default Header