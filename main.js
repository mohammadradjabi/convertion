let fullName = document.querySelector("div>input.fullname");
let father = document.querySelector("div>input.father");
let degree = document.querySelector("div>input.degree");
let gender = document.querySelector("div>input.gender");
let phone = document.querySelector("div>input.phone");
let month = document.querySelector("div>input.month");
let day = document.querySelector("div>input.day");
let year = document.querySelector("div>input.year");
let email = document.querySelector("div>input.email");
let city = document.querySelector("div>input.city");
let submit = document.querySelector("button");
let h1 = document.querySelectorAll("h1");

let shamsiM;
let shamsiY;
let shamsiD;
submit.addEventListener("click", function () {
  h1.forEach((elem) => {
    elem.style.backgroundColor = "rgb(76, 76, 170)";
    elem.style.color = "whitesmoke";
    elem.style.padding = "0 5px";
  });
  if (year.value == 1990) {
    shamsiY = 33;
  } else if (year.value == 1991) {
    shamsiY = 32;
  } else if (year.value == 1992) {
    shamsiY = 31;
  } else if (year.value == 1993) {
    shamsiY = 30;
  } else if (year.value == 1994) {
    shamsiY = 29;
  } else if (year.value == 1995) {
    shamsiY = 28;
  } else if (year.value == 1996) {
    shamsiY = 27;
  } else if (year.value == 1997) {
    shamsiY = 26;
  } else if (year.value == 1998) {
    shamsiY = 25;
  } else if (year.value == 1999) {
    shamsiY = 24;
  } else if (year.value == 2000) {
    shamsiY = 23;
  } else if (year.value == 2001) {
    shamsiY = 22;
  } else if (year.value == 2002) {
    shamsiY = 21;
  } else if (year.value == 2003) {
    shamsiY = 20;
  } else if (year.value == 2004) {
    shamsiY = 19;
  } else if (year.value == 2005) {
    shamsiY = 18;
  } else if (year.value == 2006) {
    shamsiY = 17;
  } else if (year.value == 2007) {
    shamsiY = 16;
  } else if (year.value == 2008) {
    shamsiY = 15;
  } else if (year.value == 2009) {
    shamsiY = 14;
  } else if (year.value == 2010) {
    shamsiY = 13;
  } else {
    alert("Choose Date within 1990-2010");
  }
  if (month.value == 1) {
    shamsiM = 7;
  } else if (month.value == 2) {
    shamsiM = 8;
  } else if (month.value == 3) {
    shamsiM = 9;
  } else if (month.value == 4) {
    shamsiM = 10;
  } else if (month.value == 5) {
    shamsiM = 11;
  } else if (month.value == 6) {
    shamsiM = 12;
  } else if (month.value == 7) {
    shamsiM = 1;
  } else if (month.value == 8) {
    shamsiM = 2;
  } else if (month.value == 9) {
    shamsiM = 3;
  } else if (month.value == 10) {
    shamsiM = 4;
  } else if (month.value == 11) {
    shamsiM = 5;
  } else if (month.value == 12) {
    shamsiM = 6;
  } else {
    alert("Choose Month within 1-12");
  }
  if (day.value == 1) {
    shamsiD = 30;
  } else if (day.value == 2) {
    shamsiD = 29;
  } else if (day.value == 3) {
    shamsiD = 28;
  } else if (day.value == 4) {
    shamsiD = 27;
  } else if (day.value == 5) {
    shamsiD = 26;
  } else if (day.value == 6) {
    shamsiD = 25;
  } else if (day.value == 7) {
    shamsiD = 24;
  } else if (day.value == 8) {
    shamsiD = 23;
  } else if (day.value == 9) {
    shamsiD = 22;
  } else if (day.value == 10) {
    shamsiD = 21;
  } else if (day.value == 11) {
    shamsiD = 20;
  } else if (day.value == 12) {
    shamsiD = 19;
  } else if (day.value == 13) {
    shamsiD = 18;
  } else if (day.value == 14) {
    shamsiD = 17;
  } else if (day.value == 15) {
    shamsiD = 16;
  } else if (day.value == 16) {
    shamsiD = 15;
  } else if (day.value == 17) {
    shamsiD = 14;
  } else if (day.value == 18) {
    shamsiD = 13;
  } else if (day.value == 19) {
    shamsiD = 12;
  } else if (day.value == 20) {
    shamsiD = 11;
  } else if (day.value == 21) {
    shamsiD = 10;
  } else if (day.value == 22) {
    shamsiD = 9;
  } else if (day.value == 23) {
    shamsiD = 8;
  } else if (day.value == 24) {
    shamsiD = 7;
  } else if (day.value == 25) {
    shamsiD = 6;
  } else if (day.value == 26) {
    shamsiD = 5;
  } else if (day.value == 27) {
    shamsiD = 4;
  } else if (day.value == 28) {
    shamsiD = 3;
  } else if (day.value == 29) {
    shamsiD = 2;
  } else if (day.value == 30) {
    shamsiD = 1;
  } else if (day.value == 31) {
    shamsiD = 31;
  } else {
    alert("Choose Day within 1-31");
  }
  document.querySelector("h1.fullname").innerHTML = fullName.value;
  document.querySelector("h1.father").innerHTML = father.value;
  document.querySelector("h1.degree").innerHTML = degree.value;
  document.querySelector("h1.gender").innerHTML = gender.value;
  document.querySelector("h1.phone").innerHTML = phone.value;
  document.querySelector("h1.email").innerHTML = email.value;
  document.querySelector("h1.city").innerHTML = city.value;
  document.querySelector("h1.year").innerHTML = `Year: ${shamsiY}`;
  document.querySelector("h1.day").innerHTML = `Day: ${shamsiD}`;
  document.querySelector("h1.month").innerHTML = `Month: ${shamsiM}`;
});
