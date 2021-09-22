const express =require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'ccbfc2f31d6e174f6ab9815bf9cd782a';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Amazon Scraper API by Raghav.");
})

// Fetching Product Details [ GET REQUEST ]

app.get('/products/:productId', async (req,res)=>{
    const { productId } = req.params;

    try{

        const response = await request(`${baseUrl}&url=http://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
    }catch(err){
        res.json(error);
    }
})


// Fetching Product Reviews [ GET REQUEST ]

app.get('/products/:productId/reviews', async (req,res)=>{
    const { productId } = req.params;

    try{

        const response = await request(`${baseUrl}&url=http://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response));
    }catch(err){
        res.json(error);
    }
})



// Fetching Product offers[ GET REQUEST ]

app.get('/products/:productId/offers', async (req,res)=>{
    const { productId } = req.params;

    try{

        const response = await request(`${baseUrl}&url=http://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response));
    }catch(err){
        res.json(error);
    }
})




// Fetching Search results [ GET REQUEST ]

app.get('/search/:searchQuery', async (req,res)=>{
    const { searchQuery } = req.params;

    try{

        const response = await request(`${baseUrl}&url=http://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));
    }catch(err){
        res.json(error);
    }
})


app.listen(PORT, () => console.log(`Server Running on Port : ${PORT}`) );
