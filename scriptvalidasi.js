let error = document.getElementById("errorMessage");

document.getElementById("btnConfirm").addEventListener("click", validasi);

// console.log(checkName());
// console.log(checkUsername());
// // console.log(checkPassword());
// // console.log(checkConfirmPassword());
// console.log(checkGender());
// console.log(checkQuantity());
// console.log(checkAgreement());

function validasi(){
  if(checkName()==false){
    return;
  }else if(checkEmail()==false){
    return;
  }else if(checkUsername()==false){
    return;
  }else if(checkPassword()==false){
    return;
  }else if(checkConfirmPassword()==false){
    return;
  }else if(checkGender()==false){
    return;
  }else if(checkQuantity()==false){
    return;
  }else if(checkAddress()==false){
    return;
  }else if(checkAgreement()==false){
    return;
  }else{
    document.getElementById("formBeli").submit();
    error.innerHTML = '';
    alert('done');
  }
}

// function validate(){
//   if(checkName()==false){
//       return;
//   }else if(checkReserveType()==false){
//       return;
//   }else if(checkNumber()==false){
//       return;
//   }else if(checkAgreement()==false){
//       return;
//   }else{
//       document.getElementById("formReserve").submit();
//       error.innerHTML = '';
//       alert("Thank You For Purchasing!");
//   }
// }

function checkName(){
  let name = document.getElementById("fullName").value;

  if(name.length == 0){
      error.innerHTML = "Fullname must be filled";
      return false;
  }

  else if(checkAlphabet(name)==false){
      error.innerHTML = "Fullname must be alphabet";
      return false;
  }

  for(let i = 0; i < name.length; i++){
    if(name.charAt(i)==containNumber(name)){
      return false;
    }
  }

  return true;
}

function checkAlphabet(name){
  for(let i = 0; i<name.length; i++){
      let char = +name.charCodeAt(i);

      if(char >= 65 && char <= 90 || char >= 97 && char <= 122){
        return true;
      }else if(char >= 48 && char <= 64){
        return false;
      }else{
        return false;
      }
  }
}

function containNumber(name){
  for(let i = 0; i < name.length; i++){
    let char = +name.charCodeAt(i);

    if(char >= 48 && char <= 64){
      return true;
    }
  }
}

function checkEmail() {
  let email = document.getElementById("email").value;

  if(email.length == 0){
    error.innerHTML = "Email must be filled";
    return false;
  }

  if (!IsValidEmail(email)) {
      error.innerHTML = "Invalid email address.";
      return false;
  }
  return true;
}

function IsValidEmail(email) {
  //Check minimum valid length of an Email.
  if (email.length <= 2) {
      return false;
  }
  //If whether email has @ character.
  if (email.indexOf("@") == -1) {
      return false;
  }

  let parts = email.split("@");
  let dot = parts[1].indexOf(".");
  let len = parts[1].length;
  let dotSplits = parts[1].split(".");
  let dotCount = dotSplits.length - 1;


  //Check whether Dot is present, and that too minimum 1 character after @.
  if (dot == -1 || dot < 2 || dotCount > 2) {
      return false;
  }

  //Check whether Dot is not the last character and dots are not repeated.
  for (let i = 0; i < dotSplits.length; i++) {
      if (dotSplits[i].length == 0) {
          return false;
      }
  }

  return true;
};

// function checkBranch(){
//   let branch = document.getElementById("selectBranch").value;

//   if(branch === ''){
//       error.innerHTML = "Branch must be chosen";
//       return false;
//   }

//   return true;
// }

//https://www.aspsnippets.com/Articles/Email-validation-without-using-Regular-Expression-in-JavaScript.aspx
function checkUsername(){
  let username = document.getElementById("username").value;

  if(username.length == 0){
    error.innerHTML = "Username must be filled";
    return false;
  }

  if(username.length < 6){
    error.innerHTML = "Username must be more than 6";
    return false;
  }

  return true;
}

let angka = 0;
let huruf = 0;
function checkPassword(){
  let password = document.getElementById("password").value;
  angka = 0;
  huruf = 0;

  if(password.length == 0){
    error.innerHTML = "Password must be filled";
    return false;
  }

  checkAlphaNum(password);
  if(angka == 0 || huruf == 0){
    error.innerHTML = "Password must be alphanumeric";
    return false;
  }

  return true;
}

function checkAlphaNum(password){
  for(let i = 0; i < password.length; i++){
    let character = +password.charCodeAt(i);

    if(character >= 65 && character <= 90){
      huruf++;
    }

    if(character >= 97 && character <= 122){
      huruf++;
    }

    if(character >= 48 && character <= 71){
      angka++
    }
  }
}

function checkConfirmPassword(){
  let confirmPassword = document.getElementById("confirmPassword").value;

  if(confirmPassword == 0){
    error.innerHTML = "Confirm Password must be filled";
    return false;
  }

  if(document.getElementById("confirmPassword").value == document.getElementById("password").value){
    return true;
  }else{
    error.innerHTML = "Confirm Password must be same with Password"
    return false;
  }
}

function checkGender(){
  let male = document.getElementById("radioMale").checked;
  let female = document.getElementById("radioFemale").checked;

  if(male == false && female == false){
      error.innerHTML = "Gender must be chosen";
      return false;
  }

  return true;
}

function checkQuantity(){
  let quantity = document.getElementById("quantity").value;

  if(quantity <= 0){
      error.innerHTML = "Quantity must be more than 0";
      return false;
  }

  return true;

}

function checkAddress(){
  let address = document.getElementById("address").value;
  let kataAkhir = address.endsWith(" Street");

  if(address.length == 0){
    error.innerHTML = "Address must be filled";
    return false;
  }

  if(kataAkhir == false){
    error.innerHTML = "Address must be ended with Street";
    return false;
  }
}

// function checkNumeric(number){
//   for(let i = 0; i<number.length; i++){
//       let char = +number.charCodeAt(i);

//       if(char >= 48 && char <= 57){
//           return true;
//       }else{
//           return false;
//       }
//   }
// }

function checkAgreement(){
  let agree = document.getElementById("checkbox").checked;

  if(agree == false){
      error.innerHTML = "Terms & Condition must be checked";
      return false;
  }
  return true;
}




// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }