class Game{

    constructor()
    {
        
    }

    update(state)
    {
      database.ref('/').update({
          gamestate :state
      }) 

    }
 async start(){
       if(gameState === 0){
        if (gameState === 0){

            player = new Player()
            var playerCountref = await database.ref('playerCount').once('value')
            if(playerCountref.exists())
            {
                playerCount = playerCountref.val()
                player.getCount()
            }
        }
        form = new Form()
        form.display()
       }
   }
  play(){
      form.hide()
      textSize(30)
      text("Game has Started!!!",120,100)
      Player.getplayerinfo()
      if(allplayer !== undefined){
          var displayposition = 130

          for(var plr in allplayer){
              if(plr === "player"+player.index)
              fill("red")
              else
              fill("black")
              
              displayposition = displayposition+1
              textSize(15)
              text(allplayer[plr].name + ": "+ allplayer[plr].distance,120,0)
      }
  }
  }
  }
