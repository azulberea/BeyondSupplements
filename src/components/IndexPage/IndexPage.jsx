import IndexWelcome from '../IndexWelcome/IndexWelcome.jsx'
import Section from '../Section/Section.jsx'
import ProductsCategoriesCarousel from '../ProductsCategoriesCarousel/ProductsCategoriesCarousel.jsx'
import CategoryOverviewContainer from '../CategoryOverviewContainer/CategoryOverviewContainer.jsx'
import GoToProductsButton from '../GoToProductsButton/GoToProductsButton.jsx'
import InspirationBanner from '../InspirationBanner/InspirationBanner.jsx'

const IndexPage = ()=> {

    return(
        <>
            <IndexWelcome/>
            <Section title={'Conoce nuestras categorías destacadas'} description={'Visita nuestra tienda completa para descubrir una gama aún mayor de productos diseñados para potenciar tu rendimiento.'} bgColor='black'>
                <ProductsCategoriesCarousel/>
                <CategoryOverviewContainer/>
                <GoToProductsButton/>
            </Section>
            <Section title={'Acerca de nosotros'} description={'En Beyond Supplements, te ofrecemos una amplia gama de suplementos deportivos de alta calidad diseñados para ayudarte a alcanzar tus objetivos, ya sea ganar masa muscular, mejorar la resistencia, o mantener un estilo de vida saludable. Desde proteínas y aminoácidos hasta vitaminas y minerales esenciales, cada uno de nuestros productos está cuidadosamente seleccionado para ofrecerte lo mejor en nutrición deportiva. Con el respaldo de la ciencia y el compromiso con tu éxito, somos tu aliado en cada etapa de tu viaje hacia una mejor versión de ti mismo.'} bgColor='white'/>
            <InspirationBanner/>
        </>
    )
}

export default IndexPage