// const konva_min = require("../libraries/konva_min");

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

    // var rect = new Konva.Rect({
    //   x: 100,
    //   y: 100,
    //   width: 100,
    //   height: 50,
    //   fill: 'red',
    //   shadowBlur: 10,
    //   cornerRadius: 10,
    //   draggable: true,
    // });

    // layer.add(rect);

    // layer.draw();
  };


  document.getElementById("add_node_button").onclick = function() {
    var p = document.getElementById("eventlog");
    p.textContent = "AddNode pressed";

    activeElement = canvas_elements.NODE;

    // var posX = stage.width()/2;
    // var posY = stage.height()/2;

    

    // var group = new Konva.Group({
    //   x: 120,
    //   y: 40,
    //   draggable: true,
    // });

    // var rect = new Konva.Rect({
    //   x: 0,
    //   y: 0,
    //   width: 200,
    //   height: 100,
    //   fill: 'blue',
    //   //stroke: 'grey',
    //   //shadowBlur: 5,
    //   cornerRadius: 10,
    //   //draggable: true,
    // });

    // var circle = new Konva.Circle({
    //   x: 0,
    //   y: 0,
    //   radius: 10,
    //   fill: 'white',
    //   stroke: 'black',
    //   strokeWidth: 0.5,
    //   stroke: 'grey',
    //   //draggable: true,
    // });

    // group.add(rect);
    // group.add(circle);

    // rect.absolutePosition({
    //   x: posX,
    //   y: posY
    // });

    // layer.add(group);

    // layer.draw();
  };


}