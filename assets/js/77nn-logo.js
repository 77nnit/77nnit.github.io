/**
 *  77nn-logo.js
 *  Author: Michele Brami
 *  Version: 1.0
 *  Published: 04 MAY 2023
 *
 *  Description:
 *  P5.js script to draw 77nn.it site logo. This is kinda my first attempt
 *  at using P5.js. Please find more information about this on the "Legale"
 *  page on my blog.
 *
 *  License:
 *  The code in this js is released under CC-BY-SA 4.0:
 *  https://creativecommons.org/licenses/by-sa/4.0/
 *  Attribution should link to "Michele Brami" OR "77nn.it" and link to:
 *  https://77nn.it/autore.html
 *  
 *  Todo:
 *  Compact the code, add constants to replace hardcoded values
 *
 */

var P = [];
var vpd = [];
const c71 = [[0,0],[10,0],[20,0],[30,0],[40,0],[40,10],[30,20],[20,30],[20,40],[20,50],[20,60]];
const c72 = [[60,0],[70,0],[80,0],[90,0],[100,0],[100,10],[90,20],[80,30],[80,40],[80,50],[80,60]];
const cn1 = [[120,20],[120,30],[120,40],[120,50],[120,60],[130,30],[140,20],[150,20],[160,30],[160,40],[160,50],[160,60]];
const cn2 = [[180,20],[180,30],[180,40],[180,50],[180,60],[190,30],[200,20],[210,20],[220,30],[220,40],[220,50],[220,60]];
const cdt = [[240,50],[240,60],[250,50],[250,60]];
const ci1 = [[280,0],[280,20],[270,20],[280,30],[280,40],[280,50],[280,60],[270,60],[290,60]];
const ct1 = [[320,10],[310,20],[320,20],[330,20],[320,30],[320,40],[320,50],[330,60],[340,60],[350,50]];

function mouseClicked(e) {
  if (e.target.tagName=="CANVAS"){
    for (var i = 0; i < P.length; i++){
      P[i].scatter();
    }
  } else {
    return true;
  }

}

class pset {
  
  constructor(destination){
    this.p = createVector(random(10 , width -10), random( 10, height -10));
    this.v = createVector(random(-20, 20), random(-20, 20));
    this.d = destination;
    this.df = this.p;
    this.col = [random(255), random(255), random(255)];    
  }
  
  update(){
    //console.log("Updating");
    this.df = this.d.copy().sub(this.p);
    
    //this.v = this.v.add(this.df.limit(1)).setMag(this.p.dist(this.d)).limit(2); //limit(3) to have points orbiting around position
    this.v = this.v.add(this.df.limit(0.15)).div(1.05);
    this.p = this.p.add(this.v);
  }

  render(){
    // console.log("Rendering");
    var w = map(this.p.dist(this.d), 0,300,9,0);
    strokeWeight(w);
    var r = map(this.v.mag(),0,4,255,this.col[0]);
    var g = map(this.v.mag(),0,4,255,this.col[1]);
    var b = map(this.v.mag(),0,4,255,this.col[2]);
    stroke(r, g, b);
    point (this.p);

  }
  
  scatter(){
    this.v = createVector(random(-25, 25), random(-25, 25));
    this.col = [random(255), random(255), random(255)];
  }
}

function setup() {
  var desc = "Animazione generata su elemento Canvas. Molti punti in posizioni casuali si spostano per assumere una formazione che forma la parola 77nn.it. Cliccando sull'immagine i punti vengono nuovamente sparpagliati e ritrovano la corretta posizione";
  describeElement("77nn.it",desc, FALLBACK);
  let myCanvas = createCanvas(400, 100);
  myCanvas.title = desc;
  myCanvas.elt.setAttribute("aria-label", desc);
  myCanvas.elt.setAttribute("role", "img");
  
  myCanvas.parent('77nn-logo');
  //frameRate(60);
  colorMode(RGB, 256);

  const text = [c71, c72, cn1, cn2, cdt, ci1, ct1];
  
  for (var j = 0; j < text.length; j++){
    for (var k = 0; k < text[j].length; k++){
      strokeWeight(9);
      var thisD = (createVector(text[j][k][0]+20,text[j][k][1]+20));
      vpd.push(thisD) ;
      P.push(new pset(thisD));
    }  
  }
}

function draw() {
  clear();

  for (var i = 0; i < P.length; i++){
    P[i].render();
    P[i].update();

  }
}
