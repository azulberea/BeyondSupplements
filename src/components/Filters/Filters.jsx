/* eslint-disable no-unused-vars */
import styles from "./Filters.module.scss"

const Filters = () => {

    return(

        <div className={styles.filters}>
            <span className={styles["filters__title"]}> Categorías </span>
            <hr/>
            <ul className={styles["filters__list"]}>
                <li className={styles["list__item"]}>Todos</li>
                <li className={styles["list__item"]}>Creatina</li>
                <li className={styles["list__item"]}>Aminoacidos</li>
                <li className={styles["list__item"]}>Proteinas</li>
                <li className={styles["list__item"]}>Accesorios</li>
            </ul>
            <span className={styles["filters__title"]}> Ordenar por </span>
            <hr/>
            <ul className={styles["filters__list"]}>
                <li className={styles["list__item"]}>Alfabéticamente</li>
                <li className={styles["list__item"]}>Precio ascendente</li>
                <li className={styles["list__item"]}>Precio descendente</li>
            </ul>
        </div>

    )
}

export default Filters