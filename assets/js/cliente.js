function saludar(){
    console.log('Diseño web 1')
    //alert('Diseño web 1')
    console.log(document);
    console.log(document.getElementById('parrafo1').innerHTML);
    console.log(document.getElementById('parrafo1').getAttribute('style'));    
}

function cambiarParrafo2(){
    document.getElementById('parrafo2').innerHTML="FES Aragon";
}

function cambiarfondobody(){
    const colores = ['#FFFFFF','#33FF57', '#2222FF', 'FFFF22', '#F5F600'];
    const colorAlea = colores[Math.floor(Math.random()* 5)];
    console.log(colorAlea); 
    document.getElementById('cuerpo').style.backgroundColor = colorAlea;
}