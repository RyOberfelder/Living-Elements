function interactable(selection){
  var core = {}
  var pack = {}
  var properties = {}
  var draggable = { "create" : function(){}, "start" : function(){},
                    "drag" : function(){},"stop" : function(){}}
  var droppable = {"activate" : function(){}, "create"  : function(){}, "deactivate"  : function(){},
                  "drop"  : function(){}, "out"  : function(){}, "over"  : function(){},}
      core.draggable = function(tempString, argument1, argument2){

          if(typeof tempString ==="undefined"){
            //positioning does not work on svg elements
            //check out the following links to fix in a higher element
            //http://stackoverflow.com/questions/20748836/how-do-i-tell-if-a-dom-element-is-html-or-svg
            //http://stackoverflow.com/questions/1108480/svg-draggable-using-jquery-and-jquery-svg
      
            $(selection.node()).draggable({
              "create" : draggable["create"],
              "start" : draggable["start"],
              "drag" : draggable["drag"],
              "stop" : draggable["stop"]
            });
          }else if(typeof argument2 !=="undefined"){
            $(selection.node()).draggable(tempString,argument1,argument2)
          }
          else{
            $(selection.node()).draggable(tempString,argument1)
          }
        return core;
      }
      core.droppable = function(){
        $(selection.node()).draggable({
          "activate" : draggable["activate"],
          "create" : draggable["create"],
          "deactivate" : draggable["deactivate"],
          "drop" : draggable["drop"],
          "out" : draggable["out"],
          "over" : draggable["over"]
        });
        return core;
      }
      core.setDrop = function(attribute, value){
        if(typeof attribute === "string"){
          if(typeof value !== "undefined" ){
            droppable[attribute] = value
          }else{
            return droppable[attribute]
          }
        }
        else if(typeof attribute === "function"){
          attribute(properties)
        }else {
          return droppable
        }
        return core;
      }
      core.setDrag = function(attribute, value){
        if(typeof attribute === "string"){
          if(typeof value !== "undefined" ){
            draggable[attribute] = value
          }else{
            return draggable[attribute]
          }
        }
        else if(typeof attribute === "function"){
          attribute(properties)
        }else {
          return draggable
        }
        return core;
      }
  return core
}
