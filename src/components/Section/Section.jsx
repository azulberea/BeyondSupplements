import styles from "./Section.module.scss"

import PropTypes from "prop-types";

const BlackBgSection = ({title, description, bgColor, children}) => {

    return (
        <section className={`${styles['section']} ${styles[`section--${bgColor}-bg`]}`}> 
            <h2 className={`${styles['section__title']} ${styles[`text-color--${bgColor}-bg`]}`}>{title}</h2>
            <p className={`${styles['section__description']} ${styles[`text-color--${bgColor}-bg`]}`}>{description}</p>
            {children}
        </section>
    )

}

BlackBgSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BlackBgSection