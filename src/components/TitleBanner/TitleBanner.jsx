import styles from "./TitleBanner.module.scss"
import { useParams } from 'react-router-dom';

const TitleBanner = () => {

    const {categoryId} = useParams()

    const getTitle = () => {
        if(categoryId){
            return categoryId
        }else{
            return "Todos los productos"
        }
    } 

    return (
        <div className={styles["banner"]}>
            <h2 className={styles["banner__title"]}> {getTitle()} </h2>
        </div>
    )

}

export default TitleBanner