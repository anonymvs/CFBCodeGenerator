

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

    this.title = createTitleElement (2, 2, this.name);
    this.title.on ('dblclick dbltap', this.onTitleDoubleClick);

    this.group = new Konva.Group({
      x: this.x,
      y: this.y,
      draggable: true,
    });

    this.group.add(this.rect);
    this.group.add(this.title);
  }

  getElement () {
    return this.group;
  }

  onDoubleClick () {
    console.log ('Double clicked');
  }

  onTitleDoubleClick () {
    this.title.hide();

    var textPosition = this.title.absolutePosition();

    // so position of textarea will be the sum of positions above:
    var areaPosition = {
      x: stage.container().offsetLeft + textPosition.x,
      y: stage.container().offsetTop + textPosition.y,
    };

    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    textarea.value = this.title.text();
    textarea.style.top = areaPosition.y + 'px';
    textarea.style.left = areaPosition.x + 'px';
    textarea.style.width = this.title.width() - this.title.padding() * 2 + 'px';
    textarea.style.height = this.title.height() - this.title.padding() * 2 + 5 + 'px';
    textarea.style.fontSize = this.title.fontSize() + 'px';
    textarea.style.border = 'none';
    textarea.style.padding = '0px';
    textarea.style.margin = '0px';
    textarea.style.overflow = 'hidden';
    textarea.style.background = 'none';
    textarea.style.outline = 'none';
    textarea.style.resize = 'none';
    textarea.style.lineHeight = this.title.lineHeight();
    textarea.style.fontFamily = this.title.fontFamily();
    textarea.style.transformOrigin = 'left top';
    textarea.style.textAlign = this.title.align();
    textarea.style.color = this.title.fill();

    // reset height
    textarea.style.height = 'auto';
    // after browsers resized it we can set actual value
    textarea.style.height = textarea.scrollHeight + 3 + 'px';

    textarea.focus();

    function removeTextarea() {
      textarea.parentNode.removeChild(textarea);
      window.removeEventListener('click', handleOutsideClick);
      this.title.show();
      tr.show();
      tr.forceUpdate();
      layer.draw();
    }

    function setTextareaWidth(newWidth) {
      if (!newWidth) {
        // set width for placeholder
        newWidth = this.title.placeholder.length * this.title.fontSize();
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
        this.title.text(textarea.value);
        removeTextarea();
      }
      // on esc do not set value back to node
      if (e.keyCode === 27) {
        removeTextarea();
      }
    });

    textarea.addEventListener('keydown', function (e) {
      scale = this.title.getAbsoluteScale().x;
      setTextareaWidth(this.title.width() * scale);
      textarea.style.height = 'auto';
      textarea.style.height =
        textarea.scrollHeight + this.title.fontSize() + 'px';
    });

    function handleOutsideClick(e) {
      if (e.target !== textarea) {
        this.title.text(textarea.value);
        removeTextarea();
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