function menu(){
const nav = document.getElementById("nav")
if (nav.className === "hid"){
  nav.classList.remove("hid")
}
else{
  nav.classList.add("hid")
}
}
