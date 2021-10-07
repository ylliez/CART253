"use strict";

let score = 0;

let startCircle = {
  x: undefined,
  y: undefined,
  size: 100,
}

let target = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: undefined,
  vy: undefined,
}

let state = 'title';

function setup() {
  createCanvas(640, 640);

  startCircle.x = width/2;
  startCircle.y = height/2;

  target.x = startCircle.x;
  target.y = startCircle.y;
  target.vx = random(-1,1);
  target.vy = random(-1,1);
}

function draw() {
  if (state === 'title') {
    title();
  }
  else if (state === 'game') {
    game();
  }
}

function title() {
  background(255,255,0);

  let d = dist(mouseX,mouseY,startCircle.x,startCircle.y);
  if (d < startCircle.size/2) {
    state = 'game';
  }

  push();
  noStroke();
  fill(0);
  ellipse(startCircle.x,startCircle.y,startCircle.size);
  pop();
}

function game() {
  background(0);
  score++;

  target.x += target.vx;
  target.y += target.vy;

  displayTarget()

  displayScore();
}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(score, width/8, height/8);
  pop();
}

function displayTarget() {
  push();
  fill(255,0,0);
  noStroke();
  ellipse(target.x,target.y,target.size);
  pop();
}
