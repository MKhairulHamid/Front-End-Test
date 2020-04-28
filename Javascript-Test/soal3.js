function series(int) {
  var u1 = int
  var output = setInterval(print, 5000)
  function print (){
      console.log(u1)
      u1 = u1 * 2
  }
  return output
}
console.log(series(2))