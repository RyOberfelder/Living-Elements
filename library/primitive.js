/*
The goal of primitive is to have all the data and functions needed for a element to be bound to the element
  primitive will be the lowest level of all elements


*/

function primitive(selection){
  var elementData = {}
  var theJson = {}
  var theProperties = {}
  var theData;
  var pack = {};
  var core = {}
  pack.bind = function(){
    core.json = theJson;
    core.properties = theProperties;
    core.data = theData;
    selection.datum(core)
    return pack;
  }
  pack.json = function(attribute, value){
    if (typeof attribute === "string" && typeof theJson[attribute] !== "undefined"){
      if(typeof value !=="undefined"){
        theJson[attribute] = value;
        return pack;
      }else{
        return theJson[attribute];
      }

    }else if (typeof attribute === "function"){
        attribute(theJson)
        return pack
    }else{
      return theJson;
    }
  };
  pack.properties = function(attribute, value){
    if (typeof attribute === "string" && typeof theProperties[attribute] !== "undefined"){
      if(typeof value !=="undefined"){
        theProperties[attribute] = value;
        return pack;
      }else{
        return theProperties[attribute];
      }

    }else if (typeof attribute === "function"){
        attribute(theProperties)
        return pack
    }else{
      return theProperties;
    }
  };
  pack.data = function(value){
    if(typeof value === "function"){
      value(theData)
      return pack;
    }else if(typeof value !=="undefined"){
      theData = value
      return pack;
    }
  };
  core.updateElement = function(attribute){
    if(typeof attribute === "string" && typeof theJson[attribute] !== "undefined"){
      selection.attr(attribute,theJson[attribute])
      return core;
    }else {
      for (var key in theJson) {
        if (theJson.hasOwnProperty(key)) {
          selection.attr(key,theJson[key]);
        }
      }
    }

  };
  return pack;
}
