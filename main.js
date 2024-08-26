let X = +prompt('Введите число')
let Y = +prompt('Введите число')
let Z = +prompt('Введите число')

if(X > Y && X < Z || X < Y && X > Z){
  alert(X + ' Средние число')
}else if(Y > X && Y < Z || Y < X && Y > Z){
  alert(Y + ' Средние число')
}else if(Z > X && Z < Y || Z < X && Z > Y){
  alert(Z + ' Средние число')
}else{
  alert('Error')
}