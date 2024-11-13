import styles from "./CategoryCard.module.scss"
import PropTypes from "prop-types";

const CategoryCard = ( {category, thumbnail} ) => {

    return (
        <div>
            <div className={styles["category-card"]}>
                <div className={styles["category-card__hidden"]}>
                    <a>Ver todo en {category}</a>
                </div>
                <p className={styles["category-card__name"]}>{category}</p>
                <img className={styles["category-card__img"]} src={thumbnail}/>
            </div>
        </div>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};


export default CategoryCard