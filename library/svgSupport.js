function svgSupport(selection){
  if(selection.node() instanceof SVGElement){


      var svgSelection;
      var core = {};
      if(selection.node().localName === "svg"){
        svgSelection = selection;
      }
      core.div = function(tempSelection){
        if(typeof svgSelection !== "undefined"){
            $(svgSelection.node()).wrap("<div class=svg-div-wrap></div>")
          if(typeof tempSelection === "function"){
            console.log("hello")
            tempSelection(d3.select(svgSelection.node().parentNode), d3.select(svgSelection.node()));
          }
          else if(typeof tempSelection !== "undefined"){
            // this is going to be if you add a selection to the div
          }
        }
        return core
      }
      core.svg = function(){
        console.log(selection.)
        return core;
      }
      return core;
  }
  else{
    console.log("The passed element is not a SVGElement");
    return false
  }
}
