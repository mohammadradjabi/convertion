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
submit.addEventListener("click", function () {
  h1.forEach((elem) => {
    elem.style.backgroundColor = "rgb(76, 76, 170)";
    elem.style.color = "whitesmoke";
    elem.style.padding = "0 5px";
  });
  if (year.value == 1990) {
    shamsiY = 1368;
  } else if (year.value == 1991) {
    shamsiY = 1369;
  } else if (year.value == 1992) {
    shamsiY = 1370;
  } else if (year.value == 1993) {
    shamsiY = 1371;
  } else if (year.value == 1994) {
    shamsiY = 1372;
  } else if (year.value == 1995) {
    shamsiY = 1373;
  } else if (year.value == 1996) {
    shamsiY = 1374;
  } else if (year.value == 1997) {
    shamsiY = 1375;
  } else if (year.value == 1998) {
    shamsiY = 1376;
  } else if (year.value == 1999) {
    shamsiY = 1377;
  } else if (year.value == 2000) {
    shamsiY = 1378;
  } else if (year.value == 2001) {
    shamsiY = 1379;
  } else if (year.value == 2002) {
    shamsiY = 1380;
  } else if (year.value == 2003) {
    shamsiY = 1381;
  } else if (year.value == 2004) {
    shamsiY = 1382;
  } else if (year.value == 2005) {
    shamsiY = 1383;
  } else if (year.value == 2006) {
    shamsiY = 1384;
  } else if (year.value == 2007) {
    shamsiY = 1385;
  } else if (year.value == 2008) {
    shamsiY = 1386;
  } else if (year.value == 2009) {
    shamsiY = 1387;
  } else if (year.value == 2010) {
    shamsiY = 1388;
  } else {
    alert("Choose Date within 1990-2010");
  }
  if (month.value == 1) {
    shamsiM = 10;
  } else if (month.value == 2) {
    shamsiM = 11;
  } else if (month.value == 3) {
    shamsiM = 12;
  } else if (month.value == 4) {
    shamsiM = 1;
  } else if (month.value == 5) {
    shamsiM = 2;
  } else if (month.value == 6) {
    shamsiM = 3;
  } else if (month.value == 7) {
    shamsiM = 4;
  } else if (month.value == 8) {
    shamsiM = 5;
  } else if (month.value == 9) {
    shamsiM = 6;
  } else if (month.value == 10) {
    shamsiM = 7;
  } else if (month.value == 11) {
    shamsiM = 8;
  } else if (month.value == 12) {
    shamsiM = 9;
  } else {
    alert("Choose Month within 1-12");
  }
  document.querySelector("h1.fullname").innerHTML = fullName.value;
  document.querySelector("h1.father").innerHTML = father.value;
  document.querySelector("h1.degree").innerHTML = degree.value;
  document.querySelector("h1.gender").innerHTML = gender.value;
  document.querySelector("h1.day").innerHTML = day.value;
  document.querySelector("h1.phone").innerHTML = phone.value;
  document.querySelector("h1.email").innerHTML = email.value;
  document.querySelector("h1.city").innerHTML = city.value;
  document.querySelector("h1.year").innerHTML = shamsiY;
  document.querySelector("h1.month").innerHTML = shamsiM;
});
