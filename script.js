let x;
x = prompt("Įveskite stačiakampio ilgį");
x = +x;
let y;
y = prompt("Įveskite stačiakampio plotį");
y = +y;

let a = 14;
let b = 8;

let c = 5.678;
let d = 12126.63;

let perimetras1 = staciakampioPerimetras (x, y);
console.log (perimetras1);

let perimetras2 = staciakampioPerimetras (a, b);
console.log (perimetras2);

let perimetras3 = staciakampioPerimetras (b, c);
console.log (perimetras3);

//skaičiuojame stačiakampio perimetrą
function staciakampioPerimetras (ilgis, plotis){
    return (ilgis+plotis) * 2;
}