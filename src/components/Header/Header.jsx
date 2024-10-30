import style from "./Header.module.scss"

const Header = () => {

    return(
        <header className={style.header}>
        <a href="/"><h1 className={style.logo}>
            <span>BEYOND</span>
            <span>SUPPLEMENTS</span>
        </h1></a>
        <div className={style['menu-icon']}>
            <box-icon name='menu' color='#ffffff'></box-icon>
        </div>
        <nav className={style.nav}>
            <ul className={style['nav-list']}>
                <a href="products.html"> Productos </a>
                <a> Carrito </a>
                <a> Contacto </a>
            </ul>
        </nav>
    </header>
    )

}

export default Header