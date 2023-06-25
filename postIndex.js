const express = require('express');
const bodyParser = require('body-parser');
require('./config');
const Product = require('./product');
const app = express();




app.use(bodyParser.json());

app.post("/create",async (req,res)=>{
    let body = req.body
    console.log(body);
    let data = await Product.insertMany(body);
    console.log(data);
    // let result = await data.save();
    // console.log(result);
    res.send(data);
});

// app.get("/list",async(req, res)=>{
//     let data = await Product.find();
//     res.send(data);
// });

// app.delete("/delete/:_id", async (req,res)=>{
//     console.log(req.params);
//     res.send("done")
//     let data = await Product.deleteOne(req.params);
//     res.send(data);
// });

// app.put("/update/:_id", async (req,res)=>{
//     console.log(req.params);
//     let data = await Product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }
//         );
//     res.send(data);
// });



app.listen(5000);