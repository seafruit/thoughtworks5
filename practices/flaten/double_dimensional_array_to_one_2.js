'use strict';

function double_to_one(collection) {

  //在这里写入代码
  	var s={},result=[];	
	collection=collection.join(",");
	var obj=collection.split(',');
	
	for(var i=0,elem;(elem=obj[i])!=null;i++){
		if(!s[elem]){
			elem=Number(elem);
			result.push(elem);
			s[elem]=true;
		}
	}
	return result;
}

module.exports = double_to_one;
