function factorial(){
    let numero = parseInt(document.getElementsByClassName('inicio').value);
    let aux=1;
    var tabla = document.createElement('table');
    var etabla = document.createElement('thead');
    var btabla = document.createElement('tbody');
    var padre = document.querySelector('.inicio');
    //ebody es el cuerpo de la tabla
    tabla.appendChild(etabla);
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

    //aqui se rellena tabla con algoritmo factorial
    for(let j=1; j<=numero; j++){
        aux=aux*j;
        let vtr2 = document.createElement('tr');
        for(let k=0; k<2; k++){
            let vtd = document.createElement('td');
            if(i==0){
                let text1=document.createTextNode(j);
                vtd.appendChild(text1);
                vtr2.appendChild(vtd);
            }
            else{
                let text1=document.createTextNode(aux);
                vtd.appendChild(text1);
                vtr2.appendChild(vtd);
            }
        }
        btabla.appendChild(vtr2);
    }
    tabla.appendChild(btabla);



    





}
