const texto = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&".split("")

let val = 0
let resultado = ""

texto.forEach(letra => {
  if (letra==='&'){
    resultado += val.toString()
    return
  }
  if (letra==='#') {
    val += 1
    return
  }
  if (letra==='@') {
    val -=1
    return
  }
  if (letra==='*') {
    val *= val
    return
  }
})

console.log(resultado)
