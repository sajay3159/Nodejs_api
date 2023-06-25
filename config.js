 const mongoose = require("mongoose");


 const DB = "mongodb://localhost:27017/e-comm"
mongoose.connect(DB , {
  useNewUrlParser : true ,
//    useCreateIndex : false, 
    useUnifiedTopology : true 
   // useFindAndModify : false
}).then(() => {
   console.log("connection successful");
}).catch((err) => console.log('no connection'));

//  mongoose.connect("mongodb://localhost:2701/e-comm");
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function dbConnect()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     return db.collection('products');
  
// }
// module.exports= dbConnect;