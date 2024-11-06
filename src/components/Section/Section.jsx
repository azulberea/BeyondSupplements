
import styles from "./Section.module.scss"
import PropTypes from "prop-types";

const Section = ({title, description, children}) => {

    return (
        <section className={styles['section']}> 
            <h2 className={styles['section__title']}>{title}</h2>
            <p className={styles['section__description']}>{description}</p>
            <>{children}</>
        </section>
    )

}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node
  };

export default Section