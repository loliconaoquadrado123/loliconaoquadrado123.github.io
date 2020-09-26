window.addEventListener('load',e=>{
    document.getElementsByTagName('div')[0].style.height=window.parseInt(innerHeight)+'px';
    document.getElementById('redirect').addEventListener('click',e=>{
        window.location.href="https://discord.com/oauth2/authorize?client_id=745726133844312115&scope=bot&permissions=8",true;
        console.log('window.location.href')
    });
    document.getElementById('redirect').style.marginLeft=window.parseInt(innerHeight)+'px'-document.getElementById('redirect').width;
})