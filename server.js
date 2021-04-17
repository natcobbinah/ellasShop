const express = require('express')
const app = express()
var cors = require('cors')
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI;

//mongodb+srv://m001-student:m001-mongodb-basics@sandbox.1ljd7.mongodb.net/ellasShop?authSource=admin
//middleware 
app.use(express.json())
app.use(express.static("public"))
app.use(cors())

//initialize db connectivity options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}


app.get('/api/products', async (req, res) => {
    const client = new MongoClient(uri, options);
    
    try {
        await client.connect();

        const database = client.db('ellasShop')
        const collection = database.collection('productData')
        const products = await collection.findOne();
        return res.json(products);
    } catch (err) {
        console.log(err)
    } finally{
        await client.close()
    }
})

app.listen(5000, () => {
    console.log('Server is running')
})