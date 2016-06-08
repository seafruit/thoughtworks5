'use strict';

function double_to_one(collection) {

  //在这里写入代码
  collection=collection.join(",");
  var obj=collection.split(',');
  for(var i=0;i<obj.length;i++){
  	obj[i]=Number(obj[i]);
  }
  
  return obj;
}

module.exports = double_to_one;
