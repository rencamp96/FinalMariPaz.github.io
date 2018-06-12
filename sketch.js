////////////////////////////////////////////////
// VARIABLES ///////////////////////////////////
////////////////////////////////////////////////

var audio1;
var audio2;
var audio3;
var audio4;
var audio5;
var audio6;
var audio7;
var audio8;
var audio9;
var audio10;
var audio11;

var canvas;

var sec;
var trans;

var Y_AXIS = 1;
var X_AXIS = 2;
var cf1, cf2, cf3, cf4, cf5, cf6, cf7, cf8;

var particles = [];

var sec = 440;
var trans = 200;
var por = 150;


var t1 = sec + por;
var t2 = (sec * 2) + trans + por;
var t3 = (sec * 3) + (trans * 2) + por - 100;
var t4 = (sec * 4) + (trans * 3) + por - 100;
var t5 = (sec * 5) + (trans * 4) + por - 100;
var t6 = (sec * 6) + (trans * 5) + por - 100;
var t7 = (sec * 7) + (trans * 6) + por - 100;
var t8 = (sec * 8) + (trans * 7) + por - 100;
var t9 = (sec * 9) + (trans * 8) + por - 100;
var t10 = (sec * 10) + (trans * 9) + por - 100;
var t11 = (sec * 11) + (trans * 10) + por - 100;
var t12 = (sec * 12) + (trans * 11) + por - 100;
var t13 = (sec * 13) + (trans * 12) + por - 100;
var t14 = (sec * 14) + (trans * 13) + por - 100;
var t15 = (sec * 15) + (trans * 14) + por - 100;
////////////////////////////////////////////////
// FUNCIONES ///////////////////////////////////
////////////////////////////////////////////////

function preload() {
  print("preload");
  audio1 = loadSound("assets/audios/audio1.mp3");
  audio2 = loadSound("assets/audios/audio2.mp3");
  audio3 = loadSound("assets/audios/audio3.mp3");
  audio4 = loadSound("assets/audios/audio4.mp3");
  audio5 = loadSound("assets/audios/audio5.mp3");
  audio6 = loadSound("assets/audios/audio6.mp3");
  audio7 = loadSound("assets/audios/audio7.mp3");
  audio8 = loadSound("assets/audios/audio8.mp3");
  audio9 = loadSound("assets/audios/audio9.mp3");
  audio10 = loadSound("assets/audios/audio10.mp3");
  audio11 = loadSound("assets/audios/audio11.mp3");
}

function setup() {
  canvas = createCanvas(displayWidth, 9340);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
  audio9.pause();
  audio10.pause();
  audio11.pause();


  ////////////////////////////////////////////////
  // COLORES PARA EL FONDO ///////////////////////
  ////////////////////////////////////////////////


  cf1 = color(255);
  cf2 = color(240, 236, 208);
  cf3 = color(170, 240, 234);
  cf4 = color(255, 179, 171);
  cf5 = color(217, 69, 72);
  cf6 = color(100, 140, 230);
  cf7 = color(55, 89, 196);
  cf8 = color(217, 24, 62);
  cf9 = color(20, 199, 133);
  //10 = 7

  cf11 = color(122, 109, 254);
  cf12 = color(255, 173, 253);
  cf13 = color(125, 201, 255);
  cf14 = color(161, 255, 180);
  cf15 = color(122, 109, 254);
  cf16 = color(255, 146, 214);

  noLoop();
}

function draw() {

  ////////////////////////////////////////////////
  // FONDOS  /////////////////////////////////////
  ///////////////////////////////////////////////

  fill(cf1);
  rect(0, 0, width, sec + por);

  setGradient(0, sec + por, width, trans, cf1, cf2, Y_AXIS);
  fill(cf2);
  rect(0, (sec + trans + por), width, sec);

  setGradient(0, (sec * 2) + trans + por, width, trans, cf2, cf3, Y_AXIS);
  fill(cf3);
  rect(0, (sec * 2) + (trans * 2) + por, width, sec);

  setGradient(0, (sec * 3) + (trans * 2) + por, width, trans, cf3, cf4, Y_AXIS);
  fill(cf4);
  rect(0, (sec * 3) + (trans * 3) + por, width, sec);

  setGradient(0, (sec * 4) + (trans * 3) + por, width, trans, cf4, cf5, Y_AXIS);
  fill(cf5);
  rect(0, (sec * 4) + (trans * 4) + por, width, sec);

  setGradient(0, (sec * 5) + (trans * 4) + por, width, trans, cf5, cf6, Y_AXIS);
  fill(cf6);
  rect(0, (sec * 5) + (trans * 5) + por, width, sec);

  setGradient(0, (sec * 6) + (trans * 5) + por, width, trans, cf6, cf7, Y_AXIS);
  fill(cf7);
  rect(0, (sec * 6) + (trans * 6) + por, width, sec);

  setGradient(0, (sec * 7) + (trans * 6) + por, width, trans, cf7, cf9, Y_AXIS);
  fill(cf9);
  rect(0, (sec * 7) + (trans * 7) + por, width, sec);

  setGradient(0, (sec * 8) + (trans * 7) + por, width, trans, cf9, cf8, Y_AXIS);
  fill(cf8);
  rect(0, (sec * 8) + (trans * 8) + por, width, sec);

  setGradient(0, (sec * 9) + (trans * 8) + por, width, trans, cf8, cf11, Y_AXIS);
  fill(cf11);
  rect(0, (sec * 9) + (trans * 9) + por, width, sec);

  setGradient(0, (sec * 10) + (trans * 9) + por, width, trans, cf11, cf12, Y_AXIS);
  fill(cf12);
  rect(0, (sec * 10) + (trans * 10) + por, width, sec);

  setGradient(0, (sec * 11) + (trans * 10) + por, width, trans, cf12, cf7, Y_AXIS);
  fill(cf7);
  rect(0, (sec * 11) + (trans * 11) + por, width, sec);

  setGradient(0, (sec * 12) + (trans * 11) + por, width, trans, cf7, cf13, Y_AXIS);
  fill(cf13);
  rect(0, (sec * 12) + (trans * 12) + por, width, sec);

  setGradient(0, (sec * 13) + (trans * 12) + por, width, trans, cf13, cf14, Y_AXIS);
  fill(cf14);
  rect(0, (sec * 13) + (trans * 13) + por, width, sec - 100);

  setGradient(0, (sec * 14) + (trans * 13) + por - 100, width, trans, cf14, cf15, Y_AXIS);
  fill(cf15);
  rect(0, (sec * 14) + (trans * 14) + por - 100, width, sec - 100);


  ////////////////////////////////////////////////
  // FORMAS //////////////////////////////////////
  ////////////////////////////////////////////////  


  stroke(0);
  strokeWeight(5);
  fill(50, 50, 50);
  line((width / 2) - 20, 120, (width / 2) - 20, 9300);
  ellipse((width / 2) - 20, 120, 35, 35);
  ellipse((width / 2) - 20, 9300, 35, 35);

  checkAudio();
  //drawParticles();

}

function checkAudio() {
  ////////////////////////////////////////////////
  // AUDIOS //////////////////////////////////////
  ////////////////////////////////////////////////  

  if (mouseY >= 0 && mouseY <= t1) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if(mouseY >= t1 && mouseY <= t2 && (audio1.isPlaying() === false)) {
    audio1.loop();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t2 && mouseY <= t3 && (audio2.isPlaying() === false)) {
    audio1.pause();
    audio2.loop();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t3 && mouseY <= t4 && (audio3.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.loop();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t4 && mouseY <= t5 && (audio4.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.loop();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t5 && mouseY <= t7 && (audio5.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.loop();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t7 && mouseY <= t9 && (audio7.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.loop();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t9 && mouseY <= t11 && (audio8.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.loop();
    audio9.pause();
    audio10.pause();
    audio11.pause();
  } else if (mouseY >= t11  && mouseY <= t12 && (audio9.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.loop();
    audio10.pause();
    audio11.pause();
  }  else if (mouseY >= t12 && mouseY <= t13 && (audio10.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.loop();
    audio11.pause();
  } else if (mouseY >= t13 && mouseY <= t15 && (audio11.isPlaying() === false)) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.loop();
  }

  setTimeout(checkAudio, 0.2);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}