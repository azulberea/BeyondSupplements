import styles from "./DrawerMenu.module.scss"
import { useState } from "react"

const DrawerMenu = () => {

    const [ isActive, setIsActive ] = useState(false);

    const showMenu = () => setIsActive(true);

    const hideMenu = () => setIsActive(false);

    return(
        <>
        <div onClick={showMenu} className={styles['drawer-menu__icon']}>
            <box-icon name='menu' color='#ffffff'></box-icon>
        </div>
        <nav id="menu__desplegable" className={isActive ? styles['nav'] : styles.hidden}>
            <ul className={styles['list']}>
                <li className={styles['list__item']}><a href="/products.html"> Productos </a></li>
                <li  className={styles['list__item']}><a> Carrito </a></li>
                <li className={styles['list__item']}><a> Contacto </a></li>
            </ul>
        </nav>
        <div onClick={hideMenu} className={isActive ? styles['drawer-menu__background-overlay'] : styles.hidden} id="overlay"></div>
        </>
    )
}

export default DrawerMenu