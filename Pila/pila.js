class Stack{
    constructor(){
        this.stack=[];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
        print();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }

    size(){
        return this.stack.length;
    }

    print(num){
        let y=10;
        let x=70;
        let lar=this.stack.length;
        for(let i=lar; i>=0; i--){
            if(this.stack[i]===undefined){    
            }else{
                if(i==lar-1 && num==1){
                    y=y+20;
                    escritura2(this.stack[i],x,y);
                    likeUnlikePost2();
                    
                }else{
                    y=y+20;
                    escritura(this.stack[i],x,y);
                    likeUnlikePost();
                }
            }        
        }   
    }
}

let p = new Stack();

function getPush(){
    let dato=prompt('Ingresa un numero: ');
    p.push(dato);
    let num=0;
    getprint(num);
}

function getpop(){
    let num=0;
    p.pop();
    getprint(num);
}

function getpeek(){
    console.log(p.peek());
    let num=1;
    getprint(num);
}

function getprint(num){
    limpiar();
    fondo();
    p.print(num);   
}

function escritura(textov,x,y){
    let c = document.getElementById("lienzo__canva");
    let contexto = c.getContext("2d");
    contexto.beginPath();
    contexto.fillStyle="black";
    contexto.font="bold 20px arial";
    contexto.textAlign="center";
    contexto.fillText(textov, x,y);
}

function escritura2(textov,x,y){
    let c = document.getElementById("lienzo__canva");
    let contexto = c.getContext("2d");
    contexto.beginPath();
    contexto.fillStyle="red";
    contexto.font="bold 20px arial";
    contexto.textAlign="center";
    contexto.fillText(textov, x,y);
}

function limpiar(){
    let c = document.getElementById("lienzo__canva");
    let contexto = c.getContext("2d");
    contexto.clearRect(0, 0, c.width, c.height);
}

function fondo(){
    let colores=["#ECB9E9","#B9ECE7","#E1F8BB"];
    let c = document.getElementById("lienzo__canva");
    let contexto = c.getContext("2d");
    contexto.beginPath();
    grad2=contexto.createRadialGradient(0,0,60,-150,150,280); //gradiente1
    grad2.addColorStop(0,colores[0]); //color punto inicial
    grad2.addColorStop(0.5,colores[1]); //color punto medio
    grad2.addColorStop(1,colores[2]); //color punto final
    contexto.fillStyle=grad2; //estilo de color=gradiente
    contexto.fillRect(0,0,150,300); //dibujo rect??ngulo
}


const figura=document.getElementById('figura');
const figura2=document.getElementById('figura2');

const likeUnlikePost=function(){
    if(figura.classList.contains('like')){
        figura.classList.remove('like');
        figura.classList.add('unlike');
    }else{
        figura.classList.remove('unlike');
        figura.classList.add('like');
    
        }
}


const likeUnlikePost2=function(){
    if(figura2.classList.contains('like2')){
        figura2.classList.remove('like2');
        figura2.classList.add('unlike2');
    }else{
        figura2.classList.remove('unlike2');
        figura2.classList.add('like2');
    
        }
}
