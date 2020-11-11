const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts 
router.get('/', async (req, res) => {
    const posts = await LoadPostCollection();
    res.send(await posts.find({}).toArray());
})
//Add Posts
router.post('/', async (req, res) =>{
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//Delete Posts
router.delete('/:id', async (req, res) => {
    const posts = await LoadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function LoadPostCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://dgaona2:Fire19941220!@vueexpress.igruc.mongodb.net/music?retryWrites=true&w=majority', 
        {
        useNewUrlParser: true
    })

    return client.db('music').collection('ApplicationMusic');
}

module.exports = router;