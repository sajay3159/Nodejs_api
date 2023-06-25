const express = require('express');
const multer = require('multer');
// const bodyParser = require('body-parser');
// require('./config');
// const Product = require('./product');
const app = express();
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("3D image");

// app.use(bodyParser.json());


app.post("/upload",upload, (req,res)=>{
    res.send("file uploaded")
});


app.listen(5000);