const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI;

//middleware 
app.use(express.json())
app.use(express.static("public"))

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
        return res.json(collection);
    } catch (err) {
        console.log(err)
    } finally{
        await client.close()
    }
})

app.listen(3000, () => {
    console.log('Server is running')
})