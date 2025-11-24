class Animal { 
sonar() { 
return "El animal hace un sonido."; 
} 
} 
class Perro extends Animal { 
sonar() { 
return "El perro hace: Guau guau."; 
} 
} 
class Gato extends Animal { 
sonar() { 
return "El gato hace: Miau."; 
} 
} 
let perro = new Perro(); 
let gato = new Gato(); 
console.log(perro.sonar()); 
console.log(gato.sonar());
