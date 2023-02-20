let i = 0
let j = document.getElementById("inpu");

function submit(){
  i = i + 1
  j.innerHTML = i
  console.log(i)
}
function dec(){
  if(i >0)
{
  i = i-1
  j.innerHTML = i
}
  else{
	j.innerHTML = 0
}
}
function reset(){
  i = 0
  j.innerHTML = i
}