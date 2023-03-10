const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const search = 'a'
    const products = await Product.find({}).select('name price')
    res.status(200).json({ products, nbHits: products.length })    
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true'? true : false
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }
    // console.log(queryObject)
    //With sort, we'll have to seperately handle the case where the sort value is not provided in the query
    //because sort is chained to the find property and we would have to display all values if no sort query is available 
    //Also, we have to cover the use case where we won't be returned anything from our await statement
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createdAt')
    }
    const products = await result
    res.status(200).json({products, nbHits: products.length})    
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}