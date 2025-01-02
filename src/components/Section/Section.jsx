import styles from "./Section.module.scss"

import PropTypes from "prop-types";

const Section = ({title, description, bgColor, children}) => {

    return (
        <section className={`${styles['section']} ${styles[`section--${bgColor}-bg`]}`}> 
            <h2 className={`${styles['section__title']} ${styles[`text-color--${bgColor}-bg`]}`}>{title}</h2>
            <p className={ description ? `${styles['section__description']} ${styles[`text-color--${bgColor}-bg`]}` : `${styles['hidden']}`}>{description}</p>
            {children}
        </section>
    )

}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Section