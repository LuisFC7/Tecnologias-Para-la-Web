function getData()
{
    let Nombre = "Nombre: "+document.getElementById("nombre").value;
    let apellido1 ="<br>Apellido Paterno: "+document.getElementById("ApellidoP").value;
    let apellido2 ="<br>Apellido Materno: "+document.getElementById("ApellidoM").value;

    let calle ="<br>Calle: "+document.getElementById("calle").value;
    let numero = "<br>Número: "+document.getElementById("numero").value;
    let colonia ="<br>Colonia: "+document.getElementById("colonia").value;
    let cp = "<br>CP: "+document.getElementById("cp").value;
    let ciudades="<br>Ciudad: "+document.getElementById("ciudades").value;

    let mes ="<br>Mes: "+document.getElementById("Mes").value;
    let dia ="<br>Día: "+document.getElementById("Dia").value;
    let año ="<br>Año: "+document.getElementById("Año").value;
    let curp="<br>CURP: "+document.getElementById("curp").value;
    let comentarios="<br>Comentarios: "+document.getElementById("Comentarios").value;


    let ventana =window.open();
    ventana.document.write(Nombre);
    ventana.document.write(apellido1);
    ventana.document.write(apellido2);
    ventana.document.write("<br><br>Dirección<br>");
    ventana.document.write(calle);
    ventana.document.write(numero);
    ventana.document.write(colonia);
    ventana.document.write(cp);
    ventana.document.write(ciudades);
    ventana.document.write("<br><br>Sexo<br>");

    //Data validation for Sex options
    for(let i=0; i<document.radios.sexo.length; i++){
       if(document.radios.sexo[i].checked){
           let sexo="<br>Sexo: "+document.radios.sexo[i].value;
           ventana.document.write(sexo);
           scookie=(document.cookie=sexo);
       }
    }

    ventana.document.write("<br><br>Fecha de Nacimiento<br>");
    ventana.document.write(mes);
    ventana.document.write(dia);
    ventana.document.write(año);
    ventana.document.write(curp);
    ventana.document.write("<br><br>Lenguajes de Programación<br>");

    for(let i=0; i<document.programacion.lenguajes.length; i++){
        if(document.programacion.lenguajes[i].checked){
            let lenguaje="<br>Lenguaje: "+document.programacion.lenguajes[i].value;
            ventana.document.write(lenguaje);
            lcookie=(document.cookie=lenguaje);
            
        }
     }

    ventana.document.write("<br><br>Pasatiempos<br>");
     for(let i=0; i<document.pasatiempos.actividades.length; i++){
        if(document.pasatiempos.actividades[i].checked){
            let pasatiempo="<br>Pasatiempos: "+document.pasatiempos.actividades[i].value;
            ventana.document.write(pasatiempo);
            pcookie=(document.cookie=pasatiempo);
        }
     }

    ventana.document.write("<br><br>Comentarios<br>");
    ventana.document.write(comentarios);
    //here demonstration for cookies variable
    document.cookie=Nombre+apellido1+apellido2+calle+numero+colonia+cp+ciudades+scookie+mes+dia+año+curp+lcookie+pcookie+comentarios;
    ventana.document.write("<br><br>COOKIES<br>");
    ventana.document.write(document.cookie);
}