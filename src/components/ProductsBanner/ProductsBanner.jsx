import styles from './ProductsBanner.module.scss'

const ProductsBanner = () => {
    
    return (
    <div className={styles['products-main']}>
        <h1 className={styles['products-main__title']}>
            Lo mejor en suplementos para que alcances el éxito
        </h1>
    </div>
    )
}

export default ProductsBanner