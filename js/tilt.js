/***************************************************************************************
*    Title: Animate a Container on Mouse Over Using Perspective and Transform
*    Author: MIHAI IONESCU 
*    Date: MARCH 15, 2018
*    Availability: https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
*
*    Modified!
*
***************************************************************************************/

(function() {
    // Init
    const titles = document.getElementById("titles"),
    borderbox = document.getElementById("borderbox");
  
    // Mouse
    const mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        const e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(titles);
  
    //-----------------------------------------
  
    let counter = 0;
    const updateRate = 10;
    const isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    const onMouseEnterHandler = function(event) {
      update(event);
    };
  
    const onMouseLeaveHandler = function() {
        borderbox.style = "";
    };
  
    const onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    const update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / borderbox.offsetHeight / 2).toFixed(2),
        (mouse.x / borderbox.offsetWidth / 2).toFixed(2)
      );
    };
  
    const updateTransformStyle = function(x, y) {
      const style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      borderbox.style.transform = style;
      borderbox.style.webkitTransform = style;
      borderbox.style.mozTransform = style;
      borderbox.style.msTransform = style;
      borderbox.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    titles.onmouseenter = onMouseEnterHandler;
    titles.onmouseleave = onMouseLeaveHandler;
    titles.onmousemove = onMouseMoveHandler;
  })();