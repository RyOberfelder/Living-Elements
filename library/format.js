/*
What is the purpose of format?
-->  format is a helper function designed to bind formattedData appropriately to selections
  --->  for


purpose
  --> a Selection should have data and functions bound to it like an Object
    inner
    .json = function(theFunction){
    if Array
    }
    .properties
    .data
*/

function format(selection){
  var preInner = {}
  preInner.structure = function(){
    var formattedData = {}
    var inner = {}
    inner.json = function (tempData){
        if(tempData instanceof Array  || tempData instanceof Object){
          formattedData.json = tempData
          return
        }
        else{
          console.error("The json data you entered is not either an Array or an object")
        }
      }
    inner.properties = function (tempData){
        if(tempData instanceof Array  || tempData instanceof Object){
          formattedData.properties = tempData
          return inner
        }else{
          console.error("The properties data you entered is not either an Array or an object")
        }
      }
    inner.settings = function (tempData){
        if(tempData instanceof Array  || tempData instanceof Object){
          formattedData.settings = tempData
          return inner
        }else{
          console.error("The setting data you entered is not either an Array or an object")
        }
      }
    inner.data = function (tempData){
          formattedData.data = tempData
          return inner
        }
    inner.temp = function (tempData){
          formattedData.temp = tempdata
          return inner
        }
    inner.record = function (tempData){
          formattedData.record =tempData
          return inner
        }
    inner.bind = function(){
      return selection.datum(formattedData)
    }
    return inner
  }
  preInner.tools = function(){
    var formattedData = selection.datum();
    var inner = {};
    inner.json = function (theFunction){
      if(formattedData.json instanceof Array){
        if(typeof theFunction ==="function"){
          formattedData.json.forEach(function(d,i){
            theFunction(d,i);
          })
          return inner
        }else {
          return formattedData.json
        }
      }else if(formatedData.json instanceof Object){
        if(typeof theFunction ==="function"){
            theFunction(d,i);
          return inner
        }else {
          return formattedData.json
        }
      }else{
        console.error("The json data you recived is not either an Array or an object")
      }
    };
    inner.properties = function (theFunction){
      if(formattedData.properties instanceof Array){
        if(typeof theFunction ==="function"){
          formattedData.json.forEach(function(d,i){
            theFunction(d,i);
          })
          return inner
        }else {
          return formattedData.json
        }
      }else if(formatedData.json instanceof Object){
        if(typeof theFunction ==="function"){
            theFunction(d,i);
          return inner
        }else {
          return formattedData.json
        }
      }else{
        console.error("The json data you recived is not either an Array or an object")
      }
    };
    inner.settings = function (tempData){
        if(tempData instanceof Array  || tempData instanceof Object){
          formattedData.settings = tempData
          return inner
        }else{
          console.error("The setting data you entered is not either an Array or an object")
        }
      }
    inner.data = function (tempData){
          formattedData.data = tempData
          return inner
        }
    inner.temp = function (tempData){
          formattedData.temp = tempdata
          return inner
        }
    inner.record = function (tempData){
          formattedData.record =tempData
          return inner
        }
    inner.bind = function(){
      return selection.datum(formattedData)
    }

    return inner;
  }
  return preInner
}
