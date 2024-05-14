const express = require('express');
const cors = require('cors'); 
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 9000;  
require('dotenv').config()
 const corsoptions = {
    origin: [
        'http://localhost:5173' , 'http://localhost:5174'
    ], 
    credentials: true  ,
    optionStatus : 200 
 }
app.use(cors(corsoptions)) 
app.use(express.json()) 
require('dotenv').config()
  console.log(process.env.DB_USER)

 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.zb1nclt.mongodb.net/?retryWrites=true&w=majority&appName=cluster`;
 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  console.log("uri" , uri)
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
       const jobsCollection = client.db("soloSphere").collection('jobs')
        app.get('/jobs' , async(req , res) => { 
          const result = await jobsCollection.find().toArray() 
          res.send(result)

        })
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
     
    }
  }
  run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('soloSphere  is running')
})

app.listen(port, () => {
    console.log(`soloSpahere  Server is running on port ${port}`)
})