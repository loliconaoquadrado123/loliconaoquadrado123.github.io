window.addEventListener('load',e=>{
    document.getElementsByTagName('img')[0].style.height=window.parseInt(innerHeight)+'px';
    document.getElementById('redirect').addEventListener('onclick',e=>{
        window.location.href="https://discord.com/oauth2/authorize?client_id=745726133844312115&scope=bot&permissions=8"
    });
})