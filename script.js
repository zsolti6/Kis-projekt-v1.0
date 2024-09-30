window.addEventListener("load", () => {
    for(var i = 18; i < 101; i++){
        document.getElementById("eletkor").innerHTML += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("eletkor").selectedIndex = -1;
});

function reg(){
    let nev = document.getElementById("nev").value;
    let email = document.getElementById("email").value;
    let nem;
    document.getElementsByName("nem").forEach(x =>{
        nem = x.checked ? x.value : nem;
    });
    let eletkor = Number(document.getElementById("eletkor").value);
    let foglalkozas = document.getElementById("foglalkozas").value;
    let agazatok = [];
    document.getElementsByName("agazat").forEach(x =>{
        if(x.checked){
            agazatok.push(x.value);
        }  
    });
    let jelszo1 = document.getElementById("jelszo1").value;
    let jelszo2 = document.getElementById("jelszo2").value;
    if(nev == "" || email == "" || nem == undefined || eletkor == 0 ||foglalkozas == "" || agazatok.length == 0 || jelszo1 == "" || jelszo2 == ""){
        alert("Nincs minden mező kitöltve!");
    }else{
        
    }
    
}

function general(){
    let karakterek = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let jelszo = "";
    
    for (let i = 0; i < 10; i++) {
        jelszo += karakterek[Math.floor(Math.random() * karakterek.length)];
    }

    document.getElementById("jelszo1").value = jelszo;
    document.getElementById("jelszo2").value = jelszo;
}

