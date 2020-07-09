let value = "";
let icons = document.getElementById('iconGroup');

window.addEventListener('click', function(event){
    let ClickIn = icons.contains(event.target);
    if(!ClickIn){
        clean();
    }
})
function voto(value){
    clean();
    paint(value);
}
function clean(){
    for(i=1; i<=5; i++){
        var element = document.getElementById("icon" + i);
        element.classList.remove("active");
    }
}
function paint(value){
    for(i=1; i<=value; i++){
        var element = document.getElementById("icon" + i);
        element.classList.add("active");
    }
}
