import styles from "./ProductsList.module.scss"
import Card from "../Card/Card.jsx"

const ProductsList = () => {

    return (
        <div className={styles["products-list"]}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default ProductsList