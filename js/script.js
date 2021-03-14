var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

const layer = new Konva.Layer();
stage.add(layer);


stage.on('click', function (evt) {
  var p = document.getElementById("eventlog");
  p.textContent = "Clicked somewhere pressed";
  
  if (evt.target !== evt.target.getStage())
    return;

  var posX = evt.target.pointerPos.x;
  var posY = evt.target.pointerPos.y;

  var elementCreator = new ElementCreator (posX, posY);
  elementCreator.ceateCanvasElement ();
});


class ElementCreator {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
  }

  


  createNodeElement () {
    var group = new Konva.Group({
      x: this.x,
      y: this.y,
      draggable: true,
    });

    var rect = new Konva.Rect({
      x: 0,
      y: 0,
      width: 200,
      height: 100,
      fill: 'blue',
      //stroke: 'grey',
      //shadowBlur: 5,
      cornerRadius: 10,
      //draggable: true,
    });

    var circle = new Konva.Circle({
      x: 0,
      y: 0,
      radius: 10,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 0.5,
      stroke: 'grey',
      //draggable: true,
    });

    group.add(rect);
    group.add(circle);

    return group;
  }


  ceateCanvasElement () {
    var element;

    switch (activeElement) {
      case canvas_elements.RECT:
        element = createRectElement ();
        break;
      case canvas_elements.CIRCLE:
        element = createCircElement ();
        break;
      case canvas_elements.NODE:
        var box = new BlackBox (this.x, this.y);
        element = box.getElement ();
        //element = this.createNodeElement ();
        break;
      case canvas_elements.NONE:
        return;
    }

    layer.add(element);
    layer.draw();
  }
}


// const image = new Konva.Image({
//   x: 10,
//   y: 10,
//   draggable: true,
//   stroke: 'red',
//   scaleX: 1 / window.devicePixelRatio,
//   scaleY: 1 / window.devicePixelRatio,
// });
// layer.add(image);

// create our shape
// var circle = new Konva.Circle({
//   x: stage.width() / 2,
//   y: stage.height() / 2,
//   radius: 70,
//   fill: 'red',
//   stroke: 'black',
//   strokeWidth: 4,
//   draggable: true,
// });

// layer.add(circle);

// layer.draw();

// html2canvas(document.querySelector('#container'), {
//     backgroundColor: 'rgba(0,0,0,0)',
//   }).then((canvas) => {
//     // show it inside Konva.Image
//     image.image(canvas);
//     layer.batchDraw();
//   });

// function renderText() {
//   // convert DOM into image
//   html2canvas(document.querySelector('.ql-editor'), {
//     backgroundColor: 'rgba(0,0,0,0)',
//   }).then((canvas) => {
//     // show it inside Konva.Image
//     shape.image(canvas);
//     layer.batchDraw();
//   });
// }

// // batch updates, so we don't render text too frequently
// var timeout = null;
// function requestTextUpdate() {
//   if (timeout) {
//     return;
//   }
//   timeout = setTimeout(function () {
//     timeout = null;
//     renderText();
//   }, 500);
// }

// // render text on all changes
// quill.on('text-change', requestTextUpdate);
// // make initial rendering
// renderText();
