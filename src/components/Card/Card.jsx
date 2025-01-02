import styles from "./Card.module.scss"

const Card = () => {
    return(
        <div className={styles["card"]}>
                    <div className={styles["card__img"]}>
                        <div className={styles["card__details-button"]}>
                            O
                        </div>
                    </div>
                    <span className={styles["card__title"]}> PRODUCT NAME</span>
                    <p className={styles["card__price"]}>$123</p>
                    <div className={styles["counter"]}>
                        <button className={styles["counter__button"]}> - </button>
                        <input className={styles["counter__input"]}/>
                        <button className={styles["counter__button"]}> + </button>
                    </div>
                    <button className={styles["card__button"]}> agregar al carrito</button>
                </div>
    )
}

export default Card