console.log("Hello JS Func stuff");

function displayName (firstName, lastName) {
    console.log(`${firstName} ${lastName}`)
}

displayName("Jamal", "Haynes")
displayName("Debra", "Gordon")
displayName("Svetlana", "Irinov")
displayName("Sequina", "Rodriguez")
displayName("Jessawynne", "Parker")

var counter = 0;
var outputElement = document.getElementById("dynamic-content");

function incrementCounter () {
    counter += 1;
    outputElement.innerHTML += counter;
}

incrementCounter ();
incrementCounter ();
incrementCounter ();
incrementCounter ();
incrementCounter ();

function sayHello() {
    console.log(`Hello to me`)
}

sayHello ();


var makePizza = function(topping, crustType) {
    console.log('The pizza is done. It has ' + crustType);
};


var addOne = function(number){
    var increased = number+1;
    console.log(increased);
    return increased;


}

function logIncreased(number){
    var increased = addOne(number);
    console.log(increased);
}

var output = logIncreased(4)

var sayHi = function(){
    console.log('hi');
}

sayHi() 

[1,6,8,2]

var least = function(array) {
    return array[0];
}

least()