const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    model: String,
    Category: String,
  });

const saveInDb = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "Max5",
    price: 2000,
    model: "Micromax",
    Category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

 //saveInDb();  //Call the function when the data field required to fixed

const updateInDb = async()=>{
    const Product = mongoose.model("products",ProductSchema);
    let data = await Product.updateOne(
        {name: "One plus-9"},
        {
            $set: {price:1500, name: "One plus-8"}
        }
    )
    console.log(data);
}

//updateInDb();  //call the function when update data

const deleteInDB = async() =>{
  const product1 = mongoose.model("products",ProductSchema);
  let data = await product1.deleteMany({name: 'Max3'})
  console.log(data)
}

//deleteInDB(); //delete the data deleteOne and deleteMany

const findInDB = async() =>{
  const product2 =mongoose.model("products",ProductSchema);
  let data = await product2.find({name:'One plus-8'})
  console.log(data);
}

//findInDB()  //to read  the data
