import getConnection from "./../database/database";

const getProducts = async(req, res) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM product");
    console.log(result);
    res.json(result);
    
}

export const methods = {
    getProducts
}