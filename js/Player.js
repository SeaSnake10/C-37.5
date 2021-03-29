class Player{
    constructor(){

    }

    update(){
        
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
           playerCount = data.val(); 
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
}