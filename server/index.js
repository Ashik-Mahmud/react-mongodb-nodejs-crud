
/**
 * username: dbUser1
 * password: BWBmAru1M29UukOh
*/


/* init express  */
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

/* middle ware  */
app.use(cors());
app.use(express.json());


app.get("/", (req, res) =>{
    res.send("Hello Express")
});


const uri = "mongodb+srv://dbUser1:BWBmAru1M29UukOh@cluster0.fykr4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    
    try{
        await client.connect();
        const userCollection = client.db("userManage").collection("user");
        const doc = {name: "Ashik Mahmud", designation: "Jr developer", email: 'ashik@gmail.com'};
        const result = await userCollection.insertOne(doc);
    
    }finally{
        // await client.close();
    }
};
run().catch(console.dir)






/* listen */
app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})
