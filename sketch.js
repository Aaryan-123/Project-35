//Create variables here
// var dogImg;
// var happyDogImg;
var database;
var foods;
var foodstock;
var feed;

function preload()
{
  //load images here
  
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  
  feedDog = new Food();
  database = firebase.database();

  foodstock = database.ref('Food');
  foodstock.on("value", readStock);

  feed = createButton("Feed the dog");
  feed.position(width / 2,90);
  feed.mousePressed(feedDog);

  addFood = createButton("Add food");
  addFood.position(350, 90);
  addFood.mousePressed(()=>{});
}

function draw() {
  background(46,139,87);

  feedDog.display();
  drawSprites();
  //add styles here
}

function readStock(data) {
  foods = data.val();
}

function writeStock(x) {

  if(x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref('/').update({
    Food : x
  })
}
