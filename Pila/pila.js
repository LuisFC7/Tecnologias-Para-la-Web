/*function Pila(){
    this.contenido=[];
    this.cont=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
}
let p = new Pila();
let dato = document.getElementById('dato').value;

function push(elemento){
    this.contenido[this.cont++]=elemento;
}

function pop(){
    return this.contenido[--this.cont];
}

function peek(){
    return this.contenido[this.cont-1];
}

//getters for input
function getP(dato){
    let prueba=p.push(dato);
    //mostrar(prueba);
    mostrar();
}

function getpop(){
    p.pop();
}

function getPeek(){
    let twow=p.peek();
    console.log(twow);
}

function mostrar(){
    let padre = document.querySelector('.contenedor__canva');
    let result='';
    for(let i=p.cont; i>0; i--)
    {
        result=p.contenido[i];
    }
    console.log(result);
}*/
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
    }

    peek(){
        return this.stack[this.stack.lenght-1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        let y=10;
        let x=20;
        let lar=this.stack.length;
        for(let i=lar; i>=0; i--){
            if(this.stack[i]===undefined){
                
            }else{
                y=y+20;
                escritura(this.stack[i],x,y);
            }        
            //console.log(this.stack[i]);
        } 
        
    }
}

let p = new Stack();
//let dato = parseInt(document.getElementById('dato').value);

/*console.log(p.size());
console.log(p.push(dato));
console.log(p.size());
p.print();
console.log(p.peek());
console.log(p.pop());
console.log(p.peek());*/

function getPush(){
    let dato=prompt('Ingresa un numero: ');
    p.push(dato);
    getprint();
}

function getpop(){
    p.pop();
}

function getpeek(){
    console.log(p.peek());
}

function getprint(){
    limpiar();
    p.print();   
}

function escritura(textov,x,y){
    let c = document.getElementById("lienzo__canva");
    let contexto = c.getContext("2d");
    contexto.beginPath();
    contexto.strokeStyle="black";
    contexto.fillStyle="black";
    contexto.font="bold 20px arial";
    contexto.strokeText(textov,x,y);



    /*cxt1.strokeStyle="blue"; //color externo
cxt1.fillStyle="red"; //color de relleno
cxt1.font="bold 20px arial"; //estilo de texto
cxt1.strokeText(texto,10,30); //texto con método stroke
cxt1.fillText(texto,10,80); //texto con método fill
cxt1.strokeText(texto,10,140); //texto con los dos métodos
cxt1.fillText(texto,10,140);*/   
}

function limpiar(){
    let c = document.getElementById("lienzo__canva");
    let contexto = c.getContext("2d");
    contexto.clearRect(0, 0, c.width, c.height);


}