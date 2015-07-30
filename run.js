d3.select("#testDiv").append("span").attr("id", "theOtherWhiteWitch").text("Here lies John")
$(function() {
  $( "#theOtherWhiteWitch" ).draggable();
});

console.log(d3.selectAll("div"))
d3.select("div#testDiv").each(function(d,i){
  console.log(d3.select(this))
})
