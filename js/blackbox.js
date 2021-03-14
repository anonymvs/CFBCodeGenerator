class BlackBox {
  constructor (posX, posY) {
    this.x = posX;
    this.y = posY;
    this.name = "Needs title...";
    this.id = "";
    this.inputs = [];
    this.outputs = [];

    this.rect = createRectElement (0, 0);
    this.rect.on('dblclick', this.onDoubleClick);

    this.title = createTitleElement (6, 6, this.name);
    this.title.on ('dblclick dbltap', this.onTitleDoubleClick);

    this.group = new Konva.Group({
      x: this.x,
      y: this.y,
      draggable: true,
    });

    this.group.add(this.rect);
    this.group.add(this.title);

    this.onTitleDoubleClick = this.onTitleDoubleClick.bind (this);
    this.getElement = this.getElement.bind (this);
  }

  getElement () {
    return this.group;
  }

  onDoubleClick () {
    console.log ('Double clicked');
  }

  onTitleDoubleClick () {
    var title = this;
    var temp = activeElement;
    activeElement = canvas_elements.NONE;
    title.hide();
    layer.draw();

    var titlePosition = title.absolutePosition();
    //var groupPosition = title.parent.absolutePosition();

    // so position of textarea will be the sum of positions above:
    var areaPosition = {
      x: stage.container().offsetLeft + titlePosition.x,
      y: stage.container().offsetTop + titlePosition.y,
    };

    // var areaPosition = {
    //   x: textPosition.x,
    //   y: textPosition.y,
    // };

    var textarea = document.createElement('textarea');
    var container = document.getElementById('container');
    container.appendChild(textarea);

    textarea.value = title.text();
    
    textarea.style.zIndex = '10';
    textarea.style.top = areaPosition.y + 'px';
    textarea.style.left = areaPosition.x + 'px';
    textarea.style.width = title.width() - title.padding() * 2 + 'px';
    textarea.style.height = title.height() - title.padding() * 2 + 5 + 'px';
    textarea.style.fontSize = title.fontSize() + 'px';
    textarea.style.border = 'none';
    textarea.style.padding = '0px';
    textarea.style.margin = '0px';
    textarea.style.overflow = 'hidden';
    textarea.style.background = 'none';
    textarea.style.outline = 'none';
    textarea.style.resize = 'none';
    textarea.style.lineHeight = title.lineHeight();
    textarea.style.fontFamily = title.fontFamily();
    textarea.style.transformOrigin = 'left bottom';
    textarea.style.textAlign = title.align();
    textarea.style.color = title.fill();
    textarea.style.position = 'absolute';

    textarea.style.transform = 'translateY(-100 px)';

    // reset height
    textarea.style.height = 'auto';
    // after browsers resized it we can set actual value
    textarea.style.height = textarea.scrollHeight + 3 + 'px';

    textarea.focus();

    function removeTextarea() {
      textarea.parentNode.removeChild(textarea);
      window.removeEventListener('click', handleOutsideClick);
      title.show();
      layer.draw();
    }

    function setTextareaWidth(newWidth) {
      if (!newWidth) {
        // set width for placeholder
        newWidth = title.placeholder.length * title.fontSize();
      }
      // some extra fixes on different browsers
      var isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      var isFirefox =
        navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (isSafari || isFirefox) {
        newWidth = Math.ceil(newWidth);
      }

      var isEdge =
        document.documentMode || /Edge/.test(navigator.userAgent);
      if (isEdge) {
        newWidth += 1;
      }
      textarea.style.width = newWidth + 'px';
    }

    textarea.addEventListener('keydown', function (e) {
      // hide on enter
      // but don't hide on shift + enter
      if (e.keyCode === 13 && !e.shiftKey) {
        title.text(textarea.value);
        removeTextarea();
      }
      // on esc do not set value back to node
      if (e.keyCode === 27) {
        removeTextarea();
      }
    });

    textarea.addEventListener('keydown', function (e) {
      var scale = title.getAbsoluteScale().x;
      setTextareaWidth(title.width() * scale);
      textarea.style.height = 'auto';
      textarea.style.height =
        textarea.scrollHeight + title.fontSize() + 'px';
    });

    function handleOutsideClick(e) {
      if (e.target !== textarea) {
        title.text(textarea.value);
        removeTextarea();
        activeElement = temp;
      }
    }
    setTimeout(() => {
      window.addEventListener('click', handleOutsideClick);
    });
  }

  // draw () {

  // }

  generate () {
    return;
  }

}