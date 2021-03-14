
function createCircElement (posX, posY) {
  var circle = new Konva.Circle({
    x: posX,
    y: posY,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    //draggable: true,
  });

  return circle;
}


function createTitleElement (posX, posY, title) {
  return new Konva.Text ({
    x: posX,
    y: posY,
    text: title,
    fontSize: 16,
    fontFamily: 'Calibri',
    fill: 'Green',
  });
}


function createRectElement (posX, posY) {
  var rect = new Konva.Rect({
    x: posX,
    y: posY,
    width: 200,
    height: 100,
    fill: 'blue',
    //stroke: 'grey',
    //shadowBlur: 5,
    cornerRadius: 10,
    //draggable: true,
  });

  return rect;
}