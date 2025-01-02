/* eslint-disable no-unused-vars */
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.jsx"
import Filters from "../Filters/Filters.jsx"
import ProductsBanner from "../ProductsBanner/ProductsBanner.jsx"
import Section from "../Section/Section.jsx"
import Card from "../Card/Card.jsx"
import ProductsListWithFilters from "../ProductsListWithFilters/ProductsListWithFilters.jsx"
import TitleBanner from "../TitleBanner/TitleBanner.jsx"

const ProductsPage = () => {

    return(
        <>
            <ProductsBanner/>
            <TitleBanner/>
            <ProductsListWithFilters/>
        </>
    )
}

export default ProductsPage 