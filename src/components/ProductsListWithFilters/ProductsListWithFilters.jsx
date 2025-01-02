import Filters from "../Filters/Filters.jsx"
import ProductsList from "../ProductsList/ProductsList.jsx"
import styles from "./ProductsListWithFilters.module.scss"

const ProductsListWithFilters = () => {

    return (
        <div className={styles["container"]}>
            <Filters/>
            <ProductsList/>
        </div>
    )

}

export default ProductsListWithFilters