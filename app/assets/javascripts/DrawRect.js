var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d'),
    rect = {},
    drag = false;

function init() {
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}

function mouseUp() {
  drag = false;
}

function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw();
    fill_data();
  }
}

function fill_data () {
  number = Math.abs(rect.w)*Math.abs(rect.h);
  $('.value').text("Selected pixels: " + number + " ("  + Math.abs(rect.w) + "x" + Math.abs(rect.h) + ") "
                           + " Cost: " + (number * 0.1).toFixed(2) + "$" );
  if (rect.w > 0 && rect.h > 0) {
      $('#confession_coordinateX').val(rect.startX);
      $('#confession_coordinateY').val(rect.startY);
  } else if (rect.w > 0 && rect.h < 0){
      $('#confession_coordinateX').val(rect.startX);
      $('#confession_coordinateY').val(rect.startY + rect.h);
  } else if (rect.w < 0 && rect.h > 0) {
      $('#confession_coordinateX').val(rect.startX + rect.w);
      $('#confession_coordinateY').val(rect.startY);
  } else {
      $('#confession_coordinateX').val(rect.startX + rect.w);
      $('#confession_coordinateY').val(rect.startY + rect.h);
  };
  $('#confession_width').val(Math.abs(rect.w));
  $('#confession_height').val(Math.abs(rect.h));
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
}

init();