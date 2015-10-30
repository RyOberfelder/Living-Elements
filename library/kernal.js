function kernal(selection){
  var theCore = {};
  theCore.mix = function(theFunction){
   var secondCore =  theFunction(selection);
    console.log(secondCore);
    for (var key in secondCore) {
      if(typeof theCore[key] !=="undefined"){
        console.log("overriding core function " + key)
      }
      theCore[key] = secondCore[key]
    }
    console.log(theCore)
    return theCore;
  }
  return theCore;
}

/*
theCore.command = function(ourCommand, value){
  if(typeof ourCommand === "string"){
    if(typeof value === "function"){
      if(typeof commands !== "undefined"){
        commands[ourCommand] = value;
      }
      else{
        commands =
      }
    }
  }

}*/
