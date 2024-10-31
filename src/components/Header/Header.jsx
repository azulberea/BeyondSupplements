import styles from "./Header.module.scss"
import DrawerMenu from "../DropdownMenu/DrawerMenu"

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
                <a href="products.html"> Productos </a>
                <a> Carrito </a>
                <a> Contacto </a>
            </ul>
        </nav>
    </header>
    )

}

export default Header