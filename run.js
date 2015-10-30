var ourSVGPrim = primitive(d3.select("#theSVG")).set("circle")
 .json("r",40)
 .json("fill" , "red")
 .properties({"margins": {"top": 10, "bottom" : 10}})
  .data("hello Fred")
  .updatePrimitive()
  .transition()
  .json({"fill" : "blue", "r": 50}).duration(4000).spark()
  .spread().json({"fill" : "green", "r": 30}).duration(4000).spark()
  .release()

  svgSupport(ourSVGPrim).div(function(div,selection){
    interactable(div).draggable();
  })
/*
svgSupport(d3.select("#theSVG")).div(function(div,selection){
  interactable(div).draggable();
})
*/



/* you will want to implement a class where it helps support svgs */
