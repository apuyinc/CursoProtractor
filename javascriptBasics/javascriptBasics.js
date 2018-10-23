// VARIABLES
console.log("VARIABLES");

console.log("hello world");
var i = 10;
console.log(i);

var name = "Jose";
console.log(name);

var value = 10.10;
console.log(value);

var boolean = true;
console.log(boolean);

var texto = "Jose Luis";
console.log(texto.length);
console.log(texto.charAt(0));

var nombre = "Jose";
var apellido = "Apuy";
console.log(nombre+apellido);
console.log("My name is \"Jose\"");

var array = [ "a", "b", 10 ];
console.log(array[0]);
console.log(array[2]);
console.log(array[3]);

//OPERADORES BASICOS 
console.log("");
console.log("OPERADORES BASICOS");

var var1 = "variable1";                 // Value object
var var2 = new String("variable1");     // String object

console.log(var1 == var2);
console.log(var1 === var2);
console.log(var1 != var2);


//COMPARADORES Y OPERADORES LOGICOS//
console.log("");
console.log("COMPARADORES");
var verdadero = true;
var falso = false;
console.log(verdadero && falso);
console.log(verdadero || falso);


//TIPOS DE DATOS
console.log("");
console.log("Tipos de Datos");

var coche = {marca:"Fiat", modelo:"500", color:"blanco"};
console.log(coche.marca);
console.log(coche["modelo"]);

function curso() {
    this.oficina = "capitole";
    this.participantes = 16;
}

var obj_curso = new curso();
console.log(obj_curso.participantes);

var fecha = new Date(2018, 11, 05);
console.log(fecha);

function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(2,3));
console.log("");


var consultora = "capitole";
if (consultora === "capitole") {
  console.log("trabajo en Capitole!");    
} else {
  console.log("pero yo soy de capitole!");    
}
console.log("");