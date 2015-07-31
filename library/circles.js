/*
Circles Function:
-->  Circles is a function called everytime you want any number of related circles

Use:
-->  Circles(d3.select("#containerElement").data())

Assumptions:
-->  TempSelection is a D3 selection, not Jquery or anything else.


*/

function Circles(tempSelection){
  var selection = tempSelection.append("g");
  var properties = { "transition in" : function(){}, "transition out" : function (){}, };
  var settings = {};
  var preInner = {}
  preInner.build = function(){
    selection.enter().append("circle")
    .attr("id", function(d,i){return d.json.id})
    return inner
  };
  preInner.properties = function(){
    return preInner;
  }
  preInner.data = function(theFunction){

    return preInner;
  }

  preInner.set = function(){

  }
  var inner = {};
  return preInner
}
