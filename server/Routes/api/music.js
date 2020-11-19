const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts 
router.get('/', async (req, res) => {
    const posts = await LoadPostCollection();
    res.send(await posts.find({}).toArray());
})
async function LoadPostCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://dgaona2:Fire19941220!@vueexpress.igruc.mongodb.net/music?retryWrites=true&w=majority', 
        {
        useNewUrlParser: true
    })

    return client.db('music').collection('ApplicationMusic');
}

module.exports = router;