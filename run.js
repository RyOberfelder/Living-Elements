primitive(d3.select("#testDiv2"))
  .json({"height" : 200, "width": 300});
  .properties({"margins": {"top": 10, "bottom"}})
  .data("hello Fred")
  .bind()
  console.log(d3.select("#testDiv2"));
