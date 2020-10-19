class Food {
    constructor() {
        this.image = loadImage("images/Milk.png")
        this.foodStock = 20;
        this.lastFed;
    }
    display() {
        var x = 0, y = 100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock != 0) {
            for(var i = 0;i < this.foodStock;i++) {
                if(i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }
    }

    getFoodStock() {
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }
  
      update(state) {
        database.ref('/').update({
          gameState : state
        });
      }
      deductFood() {
        if(keyIsDown(UP_ARROW)) {
          this.foodStock -= 1;
    }
  }
}