const obj = {
    plaintext : document.getElementById("plaintext"),
    key : document.getElementById("key") ,
    btn_vg: document.getElementById("encV"),
    btn_dvg: document.getElementById("decV"),
    res : document.getElementById("res") ,
    btn : document.getElementById("dorpdown"),
    nav : document.getElementById("nav")
  }
  //?--------------------------------------------------------------
  
  
  obj.btn.addEventListener("click",()=>{ 
    obj.btn.classList += " animaiton"
    obj.nav.classList += " navbar2"
  })
   


  
//فيجنير
function Vencrypt(plaintext, key) {
    let encryptedText = "";
    let keyIndex = 0;
  
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext[i];
  
      let keyChar = key[keyIndex % key.length];
      
      if (char.match(/[a-z]/i)) 
      {
        let plaintextCode = char.toUpperCase().charCodeAt(0) -65;
        let keyCode = keyChar.toUpperCase().charCodeAt(0) - 65;
  
        let encryptedCharCode = (plaintextCode + keyCode) % 26;
        encryptedText += String.fromCharCode(encryptedCharCode + 65);//?
  
        keyIndex++;
      } else {
        encryptedText += char;
      }
    }
  
    return encryptedText;
  }
  
  function Vdecrypt(plaintext, key) {
    let decryptedText = "";
    let keyIndex = 0;
  
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext[i];
      let keyChar = key[keyIndex % key.length];
  
      if (char.match(/[a-z]/i)) {
        let encryptedCode = char.toUpperCase().charCodeAt(0)-65;
        let keyCode = keyChar.toUpperCase().charCodeAt(0) - 65;
  
        let decryptedCharCode = (encryptedCode - keyCode + 26) % 26;
        decryptedText += String.fromCharCode(decryptedCharCode + 65);
  
        keyIndex++;
      } else {
        decryptedText += char;
      }
    }
  
    return decryptedText;
  }
  
  
  
  obj.btn_vg.addEventListener("click", ()=>{
    obj.res.textContent = `the result = ${Vencrypt(obj.plaintext.value ,obj.key.value)}`
  } )
  
  obj.btn_dvg.addEventListener("click", ()=>{
    obj.res.textContent =  `the result = ${Vdecrypt(obj.plaintext.value ,obj.key.value)}`
  })