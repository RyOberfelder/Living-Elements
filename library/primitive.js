/*
The goal of primitive is to have all the data and functions needed for a element to be bound to the element
  primitive will be the lowest level of all elements


*/

function primitive(selection){
  var elementData = {}
  var theJson = {}
  var theProperties = {}
  var theElement = selection.node().tagName
  var theData;
  var pack = {};
  var core = {}
  var defaultSparks = {"duration" : 1000}
  selection.datum(core)
  pack.bind = function(){
    core.json = theJson;
    core.properties = theProperties;
    core.data = theData;
    selection.datum(core)
    return pack;
  }
  core.json = function(attribute, value){
    if (typeof attribute === "string" && typeof theJson[attribute] !== "undefined"){
      if(typeof value !=="undefined"){
        theJson[attribute] = value;
        return core;
      }else{
        return theJson[attribute];
      }

    }else if (typeof attribute === "function"){
        attribute(theJson)
        return core
    }else if(attribute instanceof Object){
      theJson = attribute
      return core
    }else{
      return theJson;
    }
  };
  core.properties = function(attribute, value){
    if (typeof attribute === "string" && typeof theProperties[attribute] !== "undefined"){
      if(typeof value !=="undefined"){
        theProperties[attribute] = value;
        return core;
      }else{
        return theProperties[attribute];
      }

    }else if (typeof attribute === "function"){
        attribute(theProperties)
        return core
    }else if(attribute instanceof Object){
        theProperties = attribute
        return core
    }else{
      return theProperties;
    }
  };
  core.data = function(value){
    if(typeof value === "function"){
      value(theData)
      return core;
    }else if(typeof value !=="undefined"){
      theData = value
      return core;
    }
  };
  core.updateJson = function(attribute){
    if(typeof attribute === "string" && typeof theJson[attribute] !== "undefined"){
      selection.attr(attribute,theJson[attribute])
      return core;
    }else {
      for (var key in theJson) {
        if (theJson.hasOwnProperty(key)) {
          selection.attr(key,theJson[key]);
        }
      }
      return core;
    }

  };
  core.updateNode = function(){
    var ourNode = d3.select("#aweRect").node();
    var theParent = ourNode.parentNode
    var othernode = d3.select(theParent).append("circle").node()
  $(ourNode).replaceWith(othernode)
  selection = d3.select(othernode)
  selection.datum(core)
  return core;
  }
  core.updatePrimitive = function(){
    selection.updateNode().updateJson()
    return core;
  }
  core.jQuery = function(theFunction){
    if(typeof theFunction === "function"){
      theFunction($(selection.node()),selection.node(), selection)
    }
  }
  core.element = function(value){
    if(typeof value ==="string"){
      theElement = value;
      return core
    }else if(typeof value ==="function"){
      value(theElement);
      return core
    }else{
      return theElement
    }
  }
  core.transition = function(theFunction, value){
    if(typeof theFunction === "function"){
      theFunction(selection.transition(),selection,core)
      return core
    }else if(typeof theFunction === "string" && typeof defaultSparks[theFunction] !=="undefined"){
      if(typeof value !== "undefined"){
        defaultSparks[theFunction] = value;
      }else{
        return defaultSparks[theFunction];
      }
    }else{
      return igniteSpark(selection.transition())
    }
      var theTransition = selection.transition()
      return core;
    }
    function igniteSpark(theTransition){
      var sparkCore = {}

      sparkCore.duration = function(msTime){
        if(typeof msTime !== "undefined"){
          theTransition.duration(msTime)
          return sparkCore
        }else{
          theTransition.duration(defaultSparks["duration"])
        }
      };
      sparkCore.spark= function(attribute){
        if(typeof attribute==="string"&& typeof theJson[attribute]!=="undefined"){
          theTransition.attr(attribute,theJson[attribute]);
        }else{
          for (var key in theJson) {
            if (theJson.hasOwnProperty(key)) {
              theTransition.attr(key,theJson[key]);
            }
          }
        }
        return sparkCore
      }
      sparkCore.release= function(attribute){
        return core
      }
      sparkCore.spread= function(attribute){
        return igniteSpark(theTransition.transition())
      }
      sparkCore.json = function(attribute, value){
        if (typeof attribute === "string" && typeof theJson[attribute] !== "undefined"){
          if(typeof value !=="undefined"){
            theJson[attribute] = value;
            return sparkCore;
          }else{
            return theJson[attribute];
          }

        }else if (typeof attribute === "function"){
            attribute(theJson)
            return sparkCore
        }else if(attribute instanceof Object){
          theJson = attribute
          return sparkCore
        }else{
          return theJson;
        }
      };
      return sparkCore
    }
  return core;
}
