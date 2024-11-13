import styles from "./GoToProductsButton.module.scss";

const GoToProductsButton = () => {

    return (
        <div className={styles["go-to-products-btn"]}>
            <a className={styles["go-to-products-btn__text"]}>VER TODOS LOS PRODUCTOS</a>
        </div>
    )
}

export default GoToProductsButton