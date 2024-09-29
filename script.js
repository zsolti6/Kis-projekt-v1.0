window.addEventListener("load", () => {
    for(var i = 1; i < 101; i++){
        document.getElementById("eletkor").innerHTML += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("eletkor").selectedIndex = -1;
});

function regisztral(){
    alert("asd")
    //let nev = document.getElementById("nev").value;
    //console.log(nev);
    
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

