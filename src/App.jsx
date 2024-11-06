import './App.css'
import GoToProductsButton from './components/GoToProductsButton/GoToProductsButton'
import Header from './components/Header/Header'
import IndexWelcome from './components/IndexWelcome/IndexWelcome'
import ProductsCategoriesCarousel from './components/ProductsCategoriesCarousel/ProductsCategoriesCarousel'
import Section from './components/Section/Section'

function App() {

  return (
    <>
      <Header/>
      <IndexWelcome/>
      <Section title={'Conoce nuestras categorías destacadas'} description={'Visita nuestra tienda completa para descubrir una gama aún mayor de productos diseñados para potenciar tu rendimiento.'}>
        <ProductsCategoriesCarousel/>
        <GoToProductsButton/>
      </Section>
    </>
  )
  
}

export default App
