class comp{
	constructor(rs,is){
	this.real=rs
	this.imag=is;
	}

	add(c){
		let temp=new comp(0,0);
		temp.real=this.real+c.real;
		temp.imag=this.imag+c.imag;
		return temp;
	}

	sub(c){
		let temp=new comp(0,0);
		temp.real=this.real-c.real;
		temp.imag=this.imag-c.imag;
		return temp;
	}

	mult(c){
		let temp=new comp(0,0);
		temp.real=(this.real*c.real)-(this.imag*c.imag);
		temp.imag=(this.real*c.imag)+(this.imag*c.real);
		return temp;
	}

	mag(){
		return(this.real*this.real+this.imag*this.imag);
	}
	print(z,x,y){
		textSize(26);
		text(z.real+"  "+z.imag,x,y);
	}

	magch(c,z){
		//let temp=new comp(0,0);
		for(let j=0;j<100;j++){
			c=(c.mult(c)).add(z);//z=temp;
			
			if(c.mag()>17){return j;}
		}	
		{return 100;}
	}

	screen(j,k){
		let index=(j+k*800)*4;
	pixels[index  ]=250;
	pixels[index+1]=200;
	pixels[index+2]=100;
	pixels[index+3]=250;
		let ch=temp.magch(temp);
	}

}










function julia(){
	loadPixels();
	for(let j=0;j<900;j++){
    for(let k=0;k<1100;k++){

         let index=(k+j*width)*4;

         let temp=new comp(0,0);
         let temp1=new comp(-.05,.75);

		temp.real = (-2+(1/200)*k);
		temp.imag = (-1.5+(1/200)*j);
    p=5;
     p=temp.magch(temp,temp1);
     
    if(p==100){pixels[index]=5;pixels[index+1]=105;pixels[index+2]=30;pixels[index+3]=250;}
    else{pixels[index]=0;pixels[index+1]=0*p%250;pixels[index+2]=250-50*p%250;pixels[index+3]=250;}
    
    }
}
updatePixels();
}


function mandel(){
	loadPixels();
	for(let j=0;j<900;j++){
    for(let k=0;k<1100;k++){
    	
         let index=(k+j*width)*4;

         let temp=new comp(0,0);
         let temp1=new comp(0,0);

		temp.real = (-2+(1/200)*k);
		temp.imag = (-1.5+(1/200)*j);
    p=5;
     p=floor(temp.mag());
   
     p=temp.magch(temp1,temp);
    if(p==100){pixels[index]=200;pixels[index+1]=15;pixels[index+2]=30;pixels[index+3]=250;}
    else{pixels[index]=0;pixels[index+1]=0*p%250;pixels[index+2]=250-50*p%250;pixels[index+3]=250;}
    
    }
}
updatePixels();
}


function julie(){
	loadPixels();
	for(let j=0;j<900;j++){
    for(let k=0;k<1100;k++){
    	
         let index=(k+j*width)*4;

         let temp=new comp(0,0);
         let temp1=new comp(-0.536,0.6);

		temp.real = (-2+(1/200)*k);
		temp.imag = (-1.5+(1/200)*j);
    p=5;
     p=floor(temp.mag());
   
     p=temp.magch(temp,temp1);
    if(p==100){pixels[index]=200;pixels[index+1]=15;pixels[index+2]=30;pixels[index+3]=250;}
    else{pixels[index]=0;pixels[index+1]=0*p%250;pixels[index+2]=250-50*p%250;pixels[index+3]=250;}
    
    }
}
updatePixels();
}

function juul(){
	loadPixels();
	for(let j=0;j<900;j++){
    for(let k=0;k<1100;k++){
    	
         let index=(k+j*width)*4;

         let temp=new comp(0,0);
         let temp1=new comp(-0.65,0.44);

		temp.real = (-2+(1/200)*k);
		temp.imag = (-1.5+(1/200)*j);
    p=5;
     p=floor(temp.mag());
   
     p=temp.magch(temp,temp1);
    if(p==100){pixels[index]=0;pixels[index+1]=0;pixels[index+2]=0;pixels[index+3]=250;}
    else{pixels[index]=0;pixels[index+1]=0*p%250;pixels[index+2]=250-50*p%250;pixels[index+3]=250;}
    
    }
}
updatePixels();
}

function reset(){
	background(20,40,250);
}

function chg(){
	let temp=new comp(0,0);
	temp.real = (-2+(1/200)*mouseX);
	temp.imag = (-1.5+(1/200)*mouseY);
}

