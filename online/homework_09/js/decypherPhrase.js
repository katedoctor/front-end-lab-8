let decypherPhrase = (key,value) =>{
  let objKey = {};
  for (el in key){
    objKey[key[el]]=el;
  }
  let newObjKey = cypherPhrase(objKey, value);
  return newObjKey;
}