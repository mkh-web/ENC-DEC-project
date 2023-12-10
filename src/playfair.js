const obj = {
    plaintext : document.getElementById("plaintext"),
    key : document.getElementById("key") ,
    btn_pl: document.getElementById("encV"),
    btn_dpl: document.getElementById("decV"),
    res : document.getElementById("res") ,
    btn : document.getElementById("dorpdown"),
    nav : document.getElementById("nav")
  }
  //?--------------------------------------------------------------
  
  
  obj.btn.addEventListener("click",()=>{ 
    obj.btn.classList += " animaiton"
    obj.nav.classList += " navbar2"
  })
  
  function generateKeySquare(key) {
    var keySquare = [];
    var chars = key.toUpperCase().replace("J", "I") + "ABCDEFGHIKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < chars.length; i++) {
      if (!keySquare.includes(chars[i])) {
        keySquare.push(chars[i]);
      }
    }
  
    return keySquare;
  }
  
  function findCoordinates(keySquare, char) {
    var coordinates = {};
    var index = keySquare.indexOf(char);
  
    coordinates.row = Math.floor(index / 5);
    coordinates.column = index % 5;
  
    return coordinates;
  }
  
  function encrypt(plaintext, key) {
    var keySquare = generateKeySquare(key);
    var encryptedText = "";
  
    plaintext = plaintext.replace("J", "I").toUpperCase();
    
    for (var i = 0; i < plaintext.length; i += 2) {
      var char1 = plaintext[i];
      var char2 = plaintext[i + 1];
  

      if (char1 === char2) {
        char2 = "X";
        i--;
      }
  
      var coordinates1 = findCoordinates(keySquare, char1);
      var coordinates2 = findCoordinates(keySquare, char2);
  
      var row1 = coordinates1.row;
      var col1 = coordinates1.column;
      var row2 = coordinates2.row;
      var col2 = coordinates2.column;
  
      
      var encryptedChar1, encryptedChar2;
      if (row1 === row2) {
        encryptedChar1 = keySquare[row1 * 5 + (col1 + 1) % 5];
        encryptedChar2 = keySquare[row2 * 5 + (col2 + 1) % 5];
      } else if (col1 === col2) {
        encryptedChar1 = keySquare[((row1 + 1) % 5) * 5 + col1];
        encryptedChar2 = keySquare[((row2 + 1) % 5) * 5 + col2];
      } else {
        encryptedChar1 = keySquare[row1 * 5 + col2];
        encryptedChar2 = keySquare[row2 * 5 + col1];
      }
  
      encryptedText += encryptedChar1 + encryptedChar2;
    }
  
    return encryptedText;
  }
  
  function decrypt(plaintext, key) {
    var keySquare = generateKeySquare(key);
    var decryptedText = "";
  
    plaintext = plaintext.replace("J", "I").replace(/ /g, "").toUpperCase();
  
    for (var i = 0; i < plaintext.length; i += 2) {
      var char1 = plaintext[i];
      var char2 = plaintext[i + 1];
  
      var coordinates1 = findCoordinates(keySquare, char1);
      var coordinates2 = findCoordinates(keySquare, char2);
  
      var row1 = coordinates1.row;
      var col1 = coordinates1.column;
      var row2 = coordinates2.row;
      var col2 = coordinates2.column;
  
      var decryptedChar1, decryptedChar2;
      if (row1 === row2) {
        decryptedChar1 = keySquare[row1 * 5 + (col1 + 4) % 5];
        decryptedChar2 = keySquare[row2 * 5 + (col2 + 4) % 5];
      } else if (col1 === col2) {
        decryptedChar1 = keySquare[((row1 + 4) % 5) * 5 + col1];
        decryptedChar2 = keySquare[((row2 + 4) % 5) * 5 + col2];
      } else {
        decryptedChar1 = keySquare[row1 * 5 + col2];
        decryptedChar2 = keySquare[row2 * 5 + col1];
      }
  
      decryptedText += decryptedChar1 + decryptedChar2;
    }
    decryptedText = decryptedText.replace("X", "")
    return decryptedText;
  }
  
  
  
  
  obj.btn_pl.addEventListener("click", ()=>{
    obj.res.textContent = `the result = ${encrypt(obj.plaintext.value ,obj.key.value)}`
  } )
  
  obj.btn_dpl.addEventListener("click", ()=>{
    obj.res.textContent =  `the result = ${decrypt(obj.plaintext.value ,obj.key.value)}`
  })