import Carousel from 'react-bootstrap/Carousel';
import styles from "./ProductsCategoriesCarousel.module.scss"

const ProductsCategoriesCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
      <img
      src="/img/suplementos/star-nutrition-L-carnitina.webp" 
      alt="First slide"
      className={`d-block w-100 ${styles.carousel__img}`}
    />
        <Carousel.Caption>
          <h3 className={styles["carousel__slide-title"]}>First slide label</h3>
          <p className={styles["carousel__slide-description"]}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/img/suplementos/star-nutrition-whey-platinum-protein.webp"
      alt="Second slide"
      className={`d-block w-100 ${styles.carousel__img}`}
    />
        <Carousel.Caption>
          <h3 className={styles["carousel__slide-title"]}>Second slide label</h3>
          <p className={styles["carousel__slide-description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/img/suplementos/starNutritionCreatina.webp" 
      alt="Third slide"
      className={`d-block w-100 ${styles.carousel__img}`} 
    />
        <Carousel.Caption>
          <h3 className={styles["carousel__slide-title"]}>Third slide label</h3>
          <p className={styles["carousel__slide-description"]}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductsCategoriesCarousel