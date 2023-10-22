function playBlah() {

console.log("Commence the games!");
var blah1 = Math.ceil(Math.random() * 6);
console.log("blah 1 result: " + blah1);
document.getElementById("blah1res").innerHTML = "blah1 result = " + blah1;


var blah2 = Math.ceil(Math.random()*6);
console.log("blah 2 result: " + blah2);
document.getElementById("blah2res").innerHTML = "blah2 result = " + blah2;

var sum = blah1 + blah2;
console.log("sum: " + sum);
document.getElementById("sumres").innerHTML = "sum result = " + sum;

if(sum == 7 || sum == 11) {
    document.getElementById("gameres").innerHTML = "You lose!"
} else if (blah2 == blah1 && blah2 % 2 == 0) {
    document.getElementById("gameres").innerHTML = "You really win!"
} else {
    document.getElementById("gameres").innerHTML = "You win!"
}

}