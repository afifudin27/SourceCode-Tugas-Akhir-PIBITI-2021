const {Rectangle, Triangle, Circle} = require("./shape.js");

bentuk1 = new Rectangle(7, 5);

console.log("Persegi Panjang");
console.log(`Luas = ${bentuk1.area()}`);
console.log(`Keliling = ${bentuk1.circumference()}`);

bentuk2 = new Triangle(8, 4);

console.log("Segitiga");
console.log(`Luas = ${bentuk2.area()}`);
console.log(`Keliling = ${bentuk2.circumference()}`);

bentuk3 = new Circle(7);

console.log("lingkaran");
console.log(`Luas = ${bentuk3.area()}`);
console.log(`Keliling = ${bentuk3.circumference()}`);

