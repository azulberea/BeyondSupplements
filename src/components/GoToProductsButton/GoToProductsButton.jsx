import { Link } from "react-router-dom";
import styles from "./GoToProductsButton.module.scss";

const GoToProductsButton = () => {

    return (
        <div className={styles["go-to-products-btn"]}>
            <Link to={'/products'} className={styles["go-to-products-btn__text"]}>VER TODOS LOS PRODUCTOS</Link>
        </div>
    )
}

export default GoToProductsButton