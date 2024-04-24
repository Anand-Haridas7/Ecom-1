var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files
var productHelpers=require("../helpers/productHelpers")


let Products = [

  {
    name: "iphon 11",
    category: "mobile",
    discription: "its a good phone",
    image: "https://tse3.mm.bing.net/th?id=OIP.n3gyEUqAOc130LitrEvuIQHaKH&pid=Api&P=0&h=220"
  },

  {
    name: "oppo A5",
    category: "mobile",
    discription: "its a good phone",
    image: "https://tse2.mm.bing.net/th?id=OIP.FXcANtK7jJOTFwsquA2PDQHaHa&pid=Api&P=0&h=220"
  },

  {
    name: "samsung s4",
    category: "mobile",
    discription: "its a good phone",
    image: "https://tse2.mm.bing.net/th?id=OIP.7TtIeIg192FRh69hnb3ZoAHaE8&pid=Api&P=0&h=220"
  },

  {
    name: "poco m3",
    category: "mobile",
    discription: "its a good phone",
    image: "https://tse2.mm.bing.net/th?id=OIP.CCDp7KsaSg5nzuHvpBgX5AHaJo&pid=Api&P=0&h=220"
  },
]


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/view-products', { admin: true, Products });
});
router.get('/add-products', function (req, res, next) {
  res.render('admin/add-products', { admin: true });
});
router.post('/add-products', upload.single('image'), function (req, res) {
    console.log('POST request received for /admin/add-products');
    console.log(req.body); // Contains form fields data
    console.log(req.file); // Contains uploaded file data
    // Your code here to handle form submission, like adding the product to your Products array
    
    productHelpers.addProduct(req.body,(result)=>{
      res.send("collection added")
    });
});

module.exports = router;
