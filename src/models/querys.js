import getConnection from "./../database/database";

const getProducts = async () => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM product");
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

const getProductsByCategory = async (id) => {
  try {
    const connection = await getConnection();
    console.log(id);
    const result = await connection.query(
      "SELECT product.name, product.url_image,  product.price, product.discount, product.category FROM product INNER JOIN category ON product.category = category.id WHERE category.id = ?",
      id
    );
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

const getProductsByName = async (name) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT product.name, product.url_image,  product.price, product.discount, product.category FROM product WHERE product.name LIKE ?",
      [`%${name}%`]
    );
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getProducts,
  getProductsByCategory,
  getProductsByName,
};
