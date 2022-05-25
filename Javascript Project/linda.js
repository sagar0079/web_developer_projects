// alert("hello");

// var x = 0;
//
// while (x<26) {
//     if (x%2!==0) {
//         console.log(x);
//     }
//   x++;
// }
//
// var x = 0;
//
// while (x<5) {
//     console.log("hello");
//     x++;
// }
//
// for (var i = 0; i < 5; i++) {
//   console.log("hello");
// }

// for (var i = 0; i < 26; i++) {
//   if (i%2!==0) {
//     console.log(i);
//   }
// }

var FN = prompt("Enter your First Name");
var LN = prompt("Enter your last Name");
var ag = prompt("how old are u?");
var hei = prompt("how tall are u?")
var ptnm = prompt("what is your pet name?")

nameck = null;
ageck = null;
heick = null;
ptnmck = null;

if (FN[0] === LN[0]) {
  nameck = true;
  }else {
    nameck = false;
  }


if (ag > 20 && ag < 30) {
  ageck = true;
  }else {
    ageck = false;
  }

if (hei >= 170) {
  heick = true;
}else {
  heick = false;
}

if (ptnm[ptnm.length-1] === 'y') {
  ptnmck = true;
}else {
  ptnmck = false;
}

if (nameck && ageck && heick && ptnmck) {
  console.log("Welcome To Spy World!");
}else {
  console.log("Good");
}
