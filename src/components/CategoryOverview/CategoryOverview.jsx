import PropTypes from "prop-types"
import CategoryCard from "../CategoryCard/CategoryCard.jsx"
import styles from "./CategoryOverview.module.scss"

const CategoryOverview = ({categories}) => {

    return (
        <div className={styles["category-overview"]}>
            {categories.map(category => {
                return <CategoryCard key={category.id} category={category.name} thumbnail={category.thumbnail} />
            })}
        </div>
    )
}

CategoryOverview.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryOverview