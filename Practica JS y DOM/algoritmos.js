function factorial(){
    var numero=parseInt(document.getElementById('numero').value);
    let aux=1;
    var header =  document.createElement('h2');
    var tabla = document.createElement('table');
    var etabla = document.createElement('thead');
    var btabla = document.createElement('tbody');
    var htext = document.createTextNode("Tabla Factorial");
    var padre = document.querySelector('.inicio');
    //ebody es el cuerpo de la tabla
    header.appendChild(htext);
    tabla.appendChild(etabla);
    padre.appendChild(header);
    padre.appendChild(tabla);
    //crear un tr y dos th
    let vtr = document.createElement('tr');
    for(let i=0; i<2; i++){
        let vth = document.createElement('th');
        if(i==0){
            let head1=document.createTextNode("Número");
            vth.appendChild(head1);
            vtr.appendChild(vth);
        }
        else{
            let head1=document.createTextNode("Factorial");
            vth.appendChild(head1);
            vtr.appendChild(vth);
        }
    }
    etabla.appendChild(vtr);

    for(let k=1; k<=numero; k++)
    {  
        aux=aux*k;
        let tr1=document.createElement('tr');
        for(let j=0; j<2; j++){
            let td1=document.createElement('td');
            if(j==0){
                let text1=document.createTextNode(k);
                td1.appendChild(text1);
                tr1.appendChild(td1);
            }
            else{
                let text1=document.createTextNode(aux);
                td1.appendChild(text1);
                tr1.appendChild(td1);
            }
        }
        btabla.appendChild(tr1);
        tabla.appendChild(btabla);       
    }
    tabla.classList.add("stabla");
    tabla.setAttribute("border", "3", "black");
}

function putimage(){
    let filas=parseInt(document.getElementById('filas').value);
    let columnas=parseInt(document.getElementById('columnas').value);
    let padre = document.querySelector('.segundo');
    let tabla = document.createElement('table');
    var header =  document.createElement('h2');
    var htext = document.createTextNode("Tabla Imagenes");

    header.appendChild(htext);
    padre.appendChild(header);
    padre.appendChild(tabla);
    let ext = ".jpg";
    let cadena=[];
    let contador=1;
    

    if (filas>4 || columnas>4)
    {
        alert("La dimensión de tabla es de 4 x 4 máximo");
    }else{
        let st=filas*columnas;
        //aqui se itera sobre las imagenes
        for(let i=1; i<=st; i++){
            cadena[i]= i+ext;
        }

        for(let i=1; i<=filas; i++){
            let rows = document.createElement('tr');
            for(let j=1; j<=columnas; j++){
                aux=filas*columnas;
                let columns = document.createElement('td');
                let image = document.createElement('img');
                image.classList.add("imagenes");
                let prueba=cadena[contador];
                image.src=prueba;
                contador++;
                columns.appendChild(image);
                rows.appendChild(columns);
            }         
            tabla.appendChild(rows);
        }
    }
    tabla.classList.add("stabla");
    tabla.setAttribute("border", "3", "black");
    
}
