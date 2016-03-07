var string = "cry havoc and let slip the dogs of war";
function LetterCapitalize(str){
    var word = str.split(" ");
    console.log(word);
    console.log(word.length);
    for(var i = 0; i<word.length; i++){
        var unit = word[i].split("");
        unit[0].toUpperCase();
        console.log(unit);
}
}

LetterCapitalize(string);
console.log(string.length);
fruits.unshift("Lemon","Pineapple");


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
