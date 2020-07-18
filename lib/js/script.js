var maVoiture = document.querySelector("img");
var x = maVoiture.style.left;
var y = maVoiture.style.top;
var rotation = 0;

function faireBouger(direction) {
  let temp = rotation * Math.PI / 180;

  x = +x + direction * Math.cos(temp);
  maVoiture.style.left = x + "px";

  y = +y + direction * Math.sin(temp);
  maVoiture.style.top = y + "px";

}

function tourner(rot) {
  rotation = rotation + rot;
  maVoiture.style.transform = "rotate(" + rotation + "deg)";
  maVoiture.style.transform = "rotate(" + rotation + "deg)";
}