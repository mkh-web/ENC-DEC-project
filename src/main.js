const obj = {
  plaintext : document.getElementById("plaintext"),
  btn_cr: document.getElementById("enc"),
  btn_dcr: document.getElementById("dec"),
  res : document.getElementById("res") ,
  btn : document.getElementById("dorpdown"),
  nav : document.getElementById("nav")
}
//?--------------------------------------------------------------


obj.btn.addEventListener("click",()=>{ 
  obj.btn.classList += " animaiton"
  obj.nav.classList += " navbar2"
})












//جزء قيصر
function Cencrypt(text, shift) {
  let encryptedText = ""

  for (var i = 0; i < text.length; i++) {

    let char = text[i];
    if (char.match(/[a-z]/i)) {//تفصيل


      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {//مابتل
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);

      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    encryptedText += char;
  }
  return encryptedText;
}

function Cdecrypt(text, shift) {
  let decryptedText = ""

  for (var i = 0; i < text.length; i++) {

    let char = text[i];
    if (char.match(/[a-z]/i)) {//تفصيل


      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {//مابتل
        char = String.fromCharCode(((code - 65 - shift) % 26) + 65);

      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - shift) % 26) + 97);
      }
    }

    decryptedText += char;
  }
  return decryptedText;
}


obj.btn_cr.addEventListener("click", ()=>{
  obj.res.textContent = `the result = ${Cencrypt(obj.plaintext.value ,3)}`
} )

obj.btn_dcr.addEventListener("click", ()=>{
  obj.res.textContent =  `the result = ${Cdecrypt(obj.plaintext.value ,3)}`
})

//?--------------------------------------------------------------
