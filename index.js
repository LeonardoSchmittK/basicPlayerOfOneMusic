 var botao=window.document.getElementById('playpause')
 
function comecar(tipo){
    if(tipo==1 ){
     
         var music = window.document.getElementById('audio')
    music.play()
    
    }else if (tipo==2){
       
        var music = window.document.getElementById('audio')
    music.pause()
    }
}
var menu = window.document.getElementById('menu')
var a= window.document.getElementById('ancora')
var ul=window.document.getElementById('listaMenu')
function menuMostrar(){
    menu.style.width='210px'
    a.style.opacity='1'
    ul.style.opacity='1'
} 

function menuDesaparecer(){
    menu.style.width='16px'
    a.style.opacity='0'
    ul.style.opacity='0'
}
