import styles from "./IndexWelcome.module.scss"

const IndexWelcome = () => {

    return(
        <div className={styles["index-welcome"]}>
            <h1 className={styles["index-welcome__title"]}>El impulso que necesitas para ir mas allá</h1>
            <p className={styles["index-welcome__text"]}>Bienvenido a Beyond Supplements, la tienda que te ayudará a conquistar mas allá de tus limites</p>
        </div>
    )

}

export default IndexWelcome