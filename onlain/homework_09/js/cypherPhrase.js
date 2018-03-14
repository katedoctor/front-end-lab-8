let cypherPhrase = (obj, str)=>{
  let newStr = getTransformedArray (str.split(""), function (el){
    return obj[el] || el;
  })
  return newStr.join("");
}