function* upper(items) {
  for ( let i of items){
    try{
      yield i.toUpperCase();
    } catch(er){
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}