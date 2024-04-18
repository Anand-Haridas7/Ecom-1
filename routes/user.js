var express = require('express');
var router = express.Router();



let Products=[

  {
    name:"iphon 11",
    category:"mobile",
    discription:"its a good phone",
    image:"https://tse3.mm.bing.net/th?id=OIP.n3gyEUqAOc130LitrEvuIQHaKH&pid=Api&P=0&h=220"
  },

  {
    name:"oppo A5",
    category:"mobile",
    discription:"its a good phone",
    image:"https://tse2.mm.bing.net/th?id=OIP.FXcANtK7jJOTFwsquA2PDQHaHa&pid=Api&P=0&h=220"
  },

  {
    name:"samsung s4",
    category:"mobile",
    discription:"its a good phone",
    image:"https://tse2.mm.bing.net/th?id=OIP.7TtIeIg192FRh69hnb3ZoAHaE8&pid=Api&P=0&h=220"
  },

  {
    name:"poco m3",
    category:"mobile",
    discription:"its a good phone",
    image:"https://tse2.mm.bing.net/th?id=OIP.CCDp7KsaSg5nzuHvpBgX5AHaJo&pid=Api&P=0&h=220"
  },
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Products,admin:false});
});

module.exports = router;
