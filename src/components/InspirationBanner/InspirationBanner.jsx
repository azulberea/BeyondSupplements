import styles from "./InspirationBanner.module.scss"

const InspirationBanner = () => {

    return (
        <div className={styles['inspiration-banner']}>
            <p className={styles['inspiration-banner__quote']}>&quot;El entrenamiento te da la oportunidad de destruirte a ti mismo y reconstruirte más fuerte.&quot;</p> 
        </div>
    )
}

export default InspirationBanner