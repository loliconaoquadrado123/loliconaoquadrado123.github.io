window.addEventListener('load',function(){
    x=0;
    y=0;
    
  
function custom(){
    psychic();
    
}
    screenH = parseInt(window.innerHeight);
    screen = document.getElementById('screen');
    screen2d = screen.getContext('2d');
    playerr=new Image();
    playerr.src='player.png';
    ground={
        x:0,
        y:screen.height-64
    };
    groundd=new Image(32,32);
    groundd.src='ground.png';
    
    player={x:10,y:10};
    line=screen.height-64;
function psychic(){
    if(player.y>=ground.y-112){
        player.y=ground.y-112;
    }
}
function createGround(){
    
}
function frame() {
    
    screen2d.clearRect(0, 0,screen.width, screen.height);
    screen2d.beginPath();
    custom;
    custom();
    
    screen2d.closePath();
    
    
}
function add(key){
    if(keysPressed.lengh==0){
        keysPressed.push(key);
        return 1;
        
    }
    for(i=0;keysPressed[i]==keysPressed.lengh;++i){
        if(keysPressed[i]==key){
            return 0;
            
        }
    }
    keysPressed.push(key);
    return 1;
}
keysPressed=[];
up=['left','right'];
down=['left','right'];
left=['up','down'];
right=['up','down'];



    window.addEventListener('keydown',function(event){
        
        
        switch(event.key){
            
            case 'ArrowUp':
                
                key = 'up';
                
                
                

                player.y-=1;
                
                
                break;
            case 'ArrowDown':
                key = 'down';
                
                
                
                player.y+=1;
        
                break;
            case 'ArrowLeft':
                key = 'left';
                
                
                
                player.x-=1;
                break;
            case 'ArrowRight':
                key = 'right';
                
                
                
                player.x+=1;
                break;
                        
        }
        console.log(keysPressed)
})
window.addEventListener('keyup',function(event){
        
        keysPressed=[];
        
        
        
        
})
setInterval(frame,10);

})
