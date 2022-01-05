let username = document.getElementById("username");
username.innerHTML = prompt("Adınızı giriniz");

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDay();
  m = checkTime(m);
  s = checkTime(s);
  if(d==1)
  d="Pazartesi";
  else if (d==2)
  d="Salı";
  else if (d==3)
  d="Çarşamba";
  else if (d==4)
  d="Perşembe";
  else if (d==5)
  d="cuma";
  else if (d==6)
  d="cumartesi";
  else if (d==7)
  d="pazar";
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s +" "+ d;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } 
  return i;
}
