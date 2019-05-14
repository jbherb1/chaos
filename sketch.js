let can;
let a,b,c,d,e,z,z1,s,f;let p=5; 
//p=1;
let rad;

function setup(){			
can=createCanvas(900,600);
can.position(200,0);can.class("bdd");
radio = createRadio();radio.position(1020,10);
//radio1 = createRadio();
//radio2 = createRadio();
radio.class("bord");
  radio.option('+ Set 1',1);
  radio.option('+ Set 2',2);
  radio.option('+ Set 3',3);
  radio.option('+ Set 4',4);
  radio.option('+ Reset',5);
  radio.style('width', '70px');
 
can.mousePressed(chg);
}


function draw() {
var val = radio.value();
  switch(val){
case '1': julia();break;
case '2': juul();break;
case '3': julie();break;
case '4': mandel();break;
case '5': reset();break;

  }
  }




function keyTyped(){
	//mandel();
		  if (key === 'a') {julia();}
	 else if (key === 's') {mandel();}
	 else if (key === 'd') {julie();}
	 else if (key === 'f') {juul();}

}
