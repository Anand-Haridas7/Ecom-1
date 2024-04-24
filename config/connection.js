const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017'; // Use the actual IP address
// Connection URL and database name
// Update with your MongoDB connection URL
const dbName = 'e1'; // Update with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB server');

        // Access a specific database
        const db = client.db(dbName);

        // Return the connected database
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Rethrow the error for handling in the calling code
    }
}       


// Call the example usage function
// Export the functions (optional)
module.exports= connectToMongoDB;
    
