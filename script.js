window.addEventListener("load", () => {
    for(var i = 18; i < 101; i++){
        document.getElementById("eletkor").innerHTML += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("eletkor").selectedIndex = -1;
});

function reg(e){
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
        if(!validateName(nev)){
            alert("Nem megfelelő név");
            return;
        }
        if(!emailCheck(email)){
            alert("Nem megfelelő email cím");
            return;
        }
        if(!validatePassword(jelszo1)){
            alert("Gyenge jelszó");
            return;
        }
        if(jelszo1 != jelszo2){
            alert("Nem egyeznek a megadott jelszavak    ");
            return;
        }
        alert("Sikeres regisztráció");
        document.getElementById("regform").submit();
    }
}

function general(){
    let ujjelszo = generateStrongPassword();
    document.getElementById("jelszo1").value = ujjelszo;
    document.getElementById("jelszo2").value = ujjelszo;
}

function validateName(name) {
    // Split the name into words and remove extra spaces
    const words = name.trim().split(/\s+/);
  
    // Regular expression to check if each word starts with a capital letter and contains only alphabetic characters
    const nameRegex = /^[A-Z][a-z]*$/;
  
    // Validate that each word in the name passes the regex test
    const isValid = words.every(word => nameRegex.test(word));
  
    // Return true if all words are valid
    return isValid;
}

  function emailCheck(email){
    return email.includes("@") && (email.includes(".com") || email.includes(".hu") || email.includes(".net") || email.includes(".edu"));
  }

  function validatePassword(password) {
    // Regular expression to check password strength:
    // - Minimum 8 characters
    // - At least one uppercase letter
    // - At least one special character
    // - Optionally, one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
    // Test the password against the regular expression
    return passwordRegex.test(password);
  }

  function generateStrongPassword(length = 12) {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*';
    const numberChars = '0123456789';
  
    // Ensure the password contains at least one of each required character type
    const passwordArray = [
      upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)],
      specialChars[Math.floor(Math.random() * specialChars.length)],
      lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)],
      numberChars[Math.floor(Math.random() * numberChars.length)],
    ];
  
    // Fill the rest of the password length with random characters from all sets
    const allChars = upperCaseChars + lowerCaseChars + specialChars + numberChars;
    for (let i = passwordArray.length; i < length; i++) {
      passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }
  
    // Shuffle the password array to ensure randomness
    const shuffledPassword = passwordArray.sort(() => Math.random() - 0.5).join('');
  
    return shuffledPassword;
  }