var ages = ["a","b","a", "a", "c","d","d","b","e","c"];

function checkAdult(age) {
    for(var i = 0; i < age.length; i++){
    var character = ' "" ' + age[i] + ' "" ';
    return age === character;
    }
}


console.log(ages.filter(checkAdult));
