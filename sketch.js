//Variáveis da bolinha
let XBolinha = 300;
let YBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

//Variáveis da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//variáveis da raquete
let XRaquete = 5;
let YRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//variáveis do oponente
let XRaqueteOponente = 585;
let YRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);    
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(XRaquete,YRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(XRaquete, YRaquete);
  mostraRaquete(XRaqueteOponente,YRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(XRaqueteOponente, YRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

  function mostraBolinha(){
    circle(XBolinha,YBolinha, diametro);
  }

  function movimentaBolinha(){
   XBolinha += velocidadeXBolinha;
   YBolinha += velocidadeYBolinha;
  }

  function verificaColisaoBorda() {
  if (XBolinha + raio > width  ||   XBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
  }
  if (YBolinha + raio > height ||  YBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
     }
  }

  function mostraRaquete(x,y) {
  rect(x,y,RaqueteComprimento,RaqueteAltura);
  }
   
   function movimentaMinhaRaquete(){
  if (keyIsDown(87)){
    YRaquete -= 10;
  }
    if (keyIsDown(83)){
    YRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (XBolinha - raio < XRaquete + RaqueteComprimento && YBolinha - raio < YRaquete + RaqueteAltura && YBolinha + raio > YRaquete){
    velocidadeXBolinha *= -1;
  }
  }
 function verificaColisaoRaquete(x,y){  
   colidiu =   collideRectCircle(x,y,RaqueteComprimento,RaqueteAltura,XBolinha,YBolinha,raio);
   if (colidiu){
     velocidadeXBolinha *= -1;
   }
 }

   
  function movimentaRaqueteOponente(){
   if (keyIsDown(UP_ARROW)){
    YRaqueteOponente -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    YRaqueteOponente += 10; 
  }
  }
  function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(255,140,0);
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140,0));
    rect(450,10,40,20);
    fill(255);
    text(pontosOponente, 470, 26);
  }

  function marcaPonto(){
    if (XBolinha > 590){
      meusPontos += 1;
    }
    if (XBolinha < 10){
      pontosOponente += 1;
    }
  }