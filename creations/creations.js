var test2 = document.getElementById("test1");

$(".minetext").mouseover(function(event) {
  test2.innerHTML = event.target.dataset.mctitle;
  test2.style.display = "block";
});

$(".minetext").mouseout(function() {
  test2.style.display = "none";
});

$(".minetext").mousemove(function (event) {
  pos (test2, 5, -30, event);
});

var pos = function (o, x, y, event) {
    var posX = 0, posY = 0;
    var e = event || window.event;
    if (e.pageX || e.pageY) {
        posX = e.pageX;
        posY = e.pageY;
    } else if (e.clientX || e.clientY) {
        posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    o.style.position = "absolute";
    o.style.top = (posY + y) + "px";
    o.style.left = (posX + x) + "px";
}

test2.style.display = "none";
