var sprintf = function (fmt) {
  if(fmt.length <= 0) {
    return ''
  }
  var args = Array.from(arguments)
  var output = []
  var currArg = 1
  for(var i = 0; i < fmt.length; i++) {
    while(fmt[i] !== '%' && i < fmt.length) {
      output.push(fmt[i])
      i++
    }
    if(i < fmt.length && fmt[i++] === '%') {
      switch(fmt[i]) {
      case 'd':
        output.push(Number(args[currArg]))
        currArg++
        break
      case '%':
        output.push('%')
        break
      }
    }
  }
  return output.join('')
}
