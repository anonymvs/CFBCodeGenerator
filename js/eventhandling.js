
window.onload = function () {

  document.getElementById("add_circle_button").onclick = function() {
    var p = document.getElementById("eventlog");
    p.textContent = "AddCircle pressed";

    activeElement = canvas_elements.CIRCLE;    
  };


  document.getElementById("add_rect_button").onclick = function() {
    var p = document.getElementById("eventlog");
    p.textContent = "AddRect pressed";

    activeElement = canvas_elements.RECT;
  };


  document.getElementById("add_node_button").onclick = function() {
    var p = document.getElementById("eventlog");
    p.textContent = "AddNode pressed";

    activeElement = canvas_elements.NODE;
  };
}