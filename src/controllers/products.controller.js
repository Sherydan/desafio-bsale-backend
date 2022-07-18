import getConnection from "./../database/database.js";


const getProducts = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM product");
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error);
    }
    
}

const getOffers = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM product WHERE product.discount > 0 ORDER BY product.discount DESC LIMIT 8");
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error);
    }
    
}

// get products by category
const getProductsByCategory = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT product.name, product.url_image,  product.price, product.discount, product.category FROM product INNER JOIN category ON product.category = category.id WHERE category.id = ?", [req.params.category]);
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error);
    }
    
}

const getProductsByName = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT product.name, product.url_image,  product.price, product.discount, product.category FROM product WHERE product.name LIKE ?", [`%${req.params.name}%`]);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error);
    }
}

export const methods = {
    getProducts,
    getOffers,
    getProductsByCategory,
    getProductsByName
}