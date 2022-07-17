import getConnection from "./../database/database";


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

export const methods = {
    getProducts
}