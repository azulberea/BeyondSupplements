import './App.css'
import Header from './components/Header/Header'
import IndexWelcome from './components/IndexWelcome/IndexWelcome'
import Section from './components/Section/Section'
import ProductsCategoriesCarousel from './components/ProductsCategoriesCarousel/ProductsCategoriesCarousel'
import CategoryOverviewContainer from './components/CategoryOverviewContainer/CategoryOverviewContainer'
import GoToProductsButton from './components/GoToProductsButton/GoToProductsButton'

function App() {

  return (
    <>
      <Header/>
      <IndexWelcome/>
      <Section title={'Conoce nuestras categorías destacadas'} description={'Visita nuestra tienda completa para descubrir una gama aún mayor de productos diseñados para potenciar tu rendimiento.'} bgColor='black'>
        <ProductsCategoriesCarousel/>
        <CategoryOverviewContainer/>
        <GoToProductsButton/>
      </Section>
      <Section title={'Acerca de nosotros'} description={'En Beyond Supplements, te ofrecemos una amplia gama de suplementos deportivos de alta calidad diseñados para ayudarte a alcanzar tus objetivos, ya sea ganar masa muscular, mejorar la resistencia, o mantener un estilo de vida saludable. Desde proteínas y aminoácidos hasta vitaminas y minerales esenciales, cada uno de nuestros productos está cuidadosamente seleccionado para ofrecerte lo mejor en nutrición deportiva. Con el respaldo de la ciencia y el compromiso con tu éxito, somos tu aliado en cada etapa de tu viaje hacia una mejor versión de ti mismo.'} >
      </Section>
    </>
  )
  
}

export default App
