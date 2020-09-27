window.addEventListener('onload',function(){
   load=document.createElement('div');
   document.body.appendChild(load).setAttribute('id','load');
   console.log(load)
})
window.addEventListener('load',function(){
    
    document.getElementById('redirect').addEventListener('click',e=>{
        window.location.href="https://discord.com/oauth2/authorize?client_id=745726133844312115&scope=bot&permissions=8",true;
        
        console.log('window.location.href')
        
    });
    
})
