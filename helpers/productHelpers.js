const  connectToMongoDB= require('../config/connection');


module.exports = {
    addProduct: async (product, callback) => {
        try {
            const db = await connectToMongoDB();
            await db.collection('products').insertOne(product);
            console.log('Product added successfully:', product);
            callback(true);
        } catch (error) {
            console.error('Error adding product:', error);
            callback(false);
        }
    }
};