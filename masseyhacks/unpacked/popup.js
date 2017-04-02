function parse(parser, doc)
  var parser = new DOMParser();
  var doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
  if (input in doc) {
    alert("TRIGGER WARNING REEEEEEEEE")
  }

function inputBox()
