import { useEffect, useState } from "react";
import { getCategories } from "../../utils/apiMock.js";
import CategoryOverview from "../CategoryOverview/CategoryOverview.jsx"

const CategoryOverviewContainer = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        
        getCategories().then((Response) => {
            setCategories(Response)
        }).catch(error => {
            console.log(error)
        })

    },[])
    

    return(
        <>
        <CategoryOverview categories={categories}/>
        </>
    )
}

export default CategoryOverviewContainer