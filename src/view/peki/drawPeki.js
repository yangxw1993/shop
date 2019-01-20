 function drawPeki (){
  let oCanvas = document.getElementById('myCanvas');
  // console.log(oCanvas);
   let ctx = oCanvas.getContext('2d');

  ctx.begginPath();
  ctx.lineWidth = '3';
  ctx.strokeStyle = '#f691b1';
  ctx.moveTo(100,200)
  ctx.quadraticCurveTo(100,200, 400, 500)



  ctx.stroke();
 }

export default drawPeki