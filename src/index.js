module.exports = function check(str, bracketsConfig) {
  const newArr = bracketsConfig.map(currrentValue => currrentValue.join(''))
  console.log(newArr);
  for(i=0;i<newArr.length;i++){
    if(str.includes(newArr[i])) {
      str = str.replace(newArr[i], '') // находим в массиве эл-т str,меняем его на ''
      console.log(str);
      i=-1   // cоотвественно,длинна массива уменьшилась на '' т.е на 1 элент совпадения
    }
    
  }
  

  return !str  
  // your solution
}
