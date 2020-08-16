let emptycounter1 = 0;
let emptycounter2 = 0;
let emptycounter3 = 0;
function user() {
  let uname = document.querySelector(".username").value;
  if (uname === "") {
    emptycounter1++;
    // alert("Username is Empty...");
    return;
  }
  let colneu = document.querySelector(".caa1").cloneNode(true);
  colneu.children[0].innerHTML = "Username is " + uname;

  let printu = document.querySelector(".infoarea1");
  printu.insertBefore(colneu, printu.firstChild);

  document.querySelector(".username").value = "";
}
function pass() {
  let pname = document.querySelector(".password").value;
  if (pname === "") {
    emptycounter2++;
    //     alert("Password is Empty...");
    return;
  }
  let colnep = document.querySelector(".caa2").cloneNode(true);
  colnep.children[0].innerHTML = "Password is " + pname;

  let printp = document.querySelector(".infoarea2");
  printp.insertBefore(colnep, printp.firstChild);

  document.querySelector(".password").value = "";
}
function email() {
  let ename = document.querySelector(".email").value;
  if (ename === "") {
    emptycounter3++;
    //     alert("Email id is Empty...");
    return;
  }
  let colnee = document.querySelector(".caa3").cloneNode(true);
  colnee.children[0].innerHTML = "Email is " + ename;

  let printe = document.querySelector(".infoarea3");
  printe.insertBefore(colnee, printe.firstChild);

  document.querySelector(".email").value = "";
}
function sub() {
  //   if (emptycounter1 >= 1) {
  //     alert("Username is Empty...");
  //   }
  //   if (emptycounter2 >= 1) {
  //     alert("Password is Empty...");
  //   }
  //   if (emptycounter3 >= 1) {
  //     alert("Email id is Empty...");
  //   } else {
  //     return;
  //   }
  alert("Once you press ok all fields get cleared..");
  document.querySelector(".clear").remove();
}
