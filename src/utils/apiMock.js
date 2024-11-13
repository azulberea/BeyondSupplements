const categories = [{id: 1, name: "Accesorios", thumbnail: "/img/suplementos/istockphoto-1399961401-2048x2048.jpg"},
    {id: 2, name: "Aminoácidos", thumbnail: "/img/suplementos/star-nutrition-L-carnitina.webp"},
    {id: 3, name: "Creatinas", thumbnail: "/img/suplementos/starNutritionCreatina.webp"},
    {id: 4, name: "Proteínas", thumbnail: "/img/suplementos/star-nutrition-whey-platinum-protein.webp"}
]

const products = []

export const getCategories = () => {

    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(categories)
        }, 1000)
    })
}

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

