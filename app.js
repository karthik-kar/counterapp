let i = 0
let j = document.getElementById("inpu");

function submit(){
  i = i + 1
  j.innerHTML = i
  console.log(i)
}
function dec(){
  i = i-1
  j.innerHTML = i
}
function reset(){
  i = 0
  j.innerHTML = i
}