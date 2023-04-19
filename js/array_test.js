let empty1 = [];
let empty2 = [,,,];
let all = [1, 'test', 3.14];
let coffee = ["americano", "latte"];
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Jaab";
//const cars = new Array("Saab", "Volvo", "BMW");
let car = cars[2];
cars[1] = Date.now();

console.log(cars);
console.log(typeof cars);

// document.getElementById("search_message").innerHTML = cars; // 이름 참조

for (var i = 0; i < all.length; i++) { // for문
    console.log(all[i]); 
}

all.forEach((value, index) => { // foreach 문
    console.log('Index: ' + index + ', Value: ' + value); 
}); 
