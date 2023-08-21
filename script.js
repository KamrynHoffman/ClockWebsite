function losangelesTime() {
  var losangelesDate = toUTC(7);

  document.getElementById("losangelesHours").innerHTML = losangelesDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("losangelesMins").innerHTML = losangelesDate
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("losangelesSeconds").innerHTML = losangelesDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(losangelesTime, 10);

function nyTime() {
  var nyDate = toUTC(4);

  document.getElementById("nyHours").innerHTML = nyDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("nyMins").innerHTML = nyDate
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("nySeconds").innerHTML = nyDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(nyTime, 10);

// London
function londonTime() {
  var londonDate = toUTC(-1);

  document.getElementById("londonHours").innerHTML = londonDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("londonMins").innerHTML = londonDate
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("londonSeconds").innerHTML = londonDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(londonTime, 10);

// Chicago
function chicagoTime() {
  var chicagoDate = toUTC(5);

  document.getElementById("chicagoHours").innerHTML = chicagoDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("chicagoMins").innerHTML = chicagoDate
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("chicagoSeconds").innerHTML = chicagoDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(chicagoTime, 10);

//Tokyo
function tokyoTime() {
  var tokyoDate = toUTC(15);

  document.getElementById("tokyoHours").innerHTML = tokyoDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("tokyoMins").innerHTML = tokyoDate
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("tokyoSeconds").innerHTML = tokyoDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(tokyoTime, 10);

//Sydney
function sydneyTime() {
  var sydneyDate = toUTC(14);

  document.getElementById("sydneyHours").innerHTML = sydneyDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("sydneyMins").innerHTML = sydneyDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("sydneySeconds").innerHTML = sydneyDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(sydneyTime, 10);

//Hong Kong
function HongKongTime() {
  var HongKongDate = toUTC(16);

  document.getElementById("HongKongHours").innerHTML = HongKongDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("HongKongMins").innerHTML = HongKongDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("HongKongSeconds").innerHTML = HongKongDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(HongKongTime, 10);

//Moscow
function MoscowTime() {
  var MoscowDate = toUTC(-3);

  document.getElementById("MoscowHours").innerHTML = MoscowDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("MoscowMins").innerHTML = MoscowDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("MoscowSeconds").innerHTML = MoscowDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(MoscowTime, 10);

//sao
function saoTime() {
  var saoDate = toUTC(3);

  document.getElementById("saoHours").innerHTML = saoDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("saoMins").innerHTML = saoDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("saoSeconds").innerHTML = saoDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(saoTime, 10);

//Istanbul
function istTime() {
  var istDate = toUTC(-3);

  document.getElementById("istHours").innerHTML = istDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("istMins").innerHTML = istDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("istSeconds").innerHTML = istDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(istTime, 10);

//cairo
function caiTime() {
  var caiDate = toUTC(-3);

  document.getElementById("caiHours").innerHTML = caiDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("caiMins").innerHTML = caiDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("caiSeconds").innerHTML = caiDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(caiTime, 10);

//seoul
function seoTime() {
  var seoDate = toUTC(-15);

  document.getElementById("seoHours").innerHTML = seoDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("seoMins").innerHTML = seoDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("seoSeconds").innerHTML = seoDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(seoTime, 10);

//paris
function parTime() {
  var parDate = toUTC(-2);

  document.getElementById("parHours").innerHTML = parDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("parMins").innerHTML = parDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("parSeconds").innerHTML = parDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(parTime, 10);

//toronto
function torTime() {
  var torDate = toUTC(16);

  document.getElementById("torHours").innerHTML = torDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("torMins").innerHTML = torDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("torSeconds").innerHTML = torDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(torTime, 10);

//dubai
function dubTime() {
  var dubDate = toUTC(-4);

  document.getElementById("dubHours").innerHTML = dubDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("dubMins").innerHTML = dubDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("dubSeconds").innerHTML = dubDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(dubTime, 10);

//antarctica
function antTime() {
  var antDate = toUTC(12);

  document.getElementById("antHours").innerHTML = antDate
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("antMins").innerHTML = antDate
    .getMinutes() 
    .toString()
    .padStart(2, "0");
  document.getElementById("antSeconds").innerHTML = antDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}
setInterval(antTime, 10);


//////////////// Functions for Simplicity ////////////////

// Converted to a Function to save lines
function toUTC(time) {
  var date = new Date();

  var utc_offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + utc_offset);

  var date_offset = time * 60;
  date.setMinutes(date.getMinutes() - date_offset);

  return date;
}
