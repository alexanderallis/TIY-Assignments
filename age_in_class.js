function calculateAge (birthYear, currentYear) {
    birthYear = prompt("What is the year you were born?");
    currentYear = prompt("What is the current year?");
    "You are either " / + (currentYear - birthYear) + / "or " / + ((currentYear - birthYear) - 1) + /;

}

 alert("You are either " calculateAge);

// ---------SECOND-IN-CLASS-EXERCISE---------

var recipe = {
    "title": "fruit-loops",
    "serves": "1",
    "ingredients": ["fruit-loops", "milk", "bowl", "spoon"]
};

console.log(recipe.title);
console.log(recipe.serves);
console.log(recipe.ingredients);

// ---------SECOND-IN-CLASS-EXERCISE-PART-TWO---------


var recipe = {
    "title": "fruit-loops",
    "serves": "1",
    "ingredients": ["fruit-loops", "milk", "bowl", "spoon"]
};

console.log(recipe.title);
console.log("Serves: ", recipe.serves);
console.log("Ingredients: ");
for (var i = 0; i < recipe.ingredients.length; i ++) {
        console.log(recipe.ingredients[i]);
}

// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);
// console.log(recipe.ingredients[3]);

// ---------SECOND-IN-CLASS-EXERCISE-PART-THREE---------

var drinksForAll = {
    "title": "Boulevardier".
    "servings": "until we're out".
    "ingredients": ["1.5 pz Campari", "1.5 pz Sweet Vermouth", "Orange Bitters", "Orange Peel"]
};

console.log(drinksForAll.title);
console.log("Serves: " + drinksForAll.servings);
console.log("Ingredients: ");

for(var i = 0; i < drinksForAll.ingredients.length; i++)
{
    console.log(drinksForAll.ingredients[i]);
};
// ---------SECOND-IN-CLASS-EXERCISE-PART-THREE---------


function calculateAge(birthYear, currentYear) {
        var age = currentYear - birthYear;
        console.log("You are either " + age + " or " + (age - 1));
}

calculateAge(1984, 2016);

// ---------SECOND-IN-CLASS-EXERCISE-PART-FOUR---------

var aboutMe = {
        hometown: "Raleigh, NC",
        hair: "red"
};

aboutMe.hair = "blue";
aboutMe.gender = "female";
delete aboutMe.gender

console.log(aboutMe);

// ---------SECOND-IN-CLASS-EXERCISE-PART-FOUR---------

var books = [
    {title: "The Design of Everyday Things",
    author: "Don Norman",
    aleardyRead: false
    },
    {title: "The Good Earth",
    author: "Pearl Buck",
    alreadyRead: true
    }];

for (var i= 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if (book.alreadyRead){
        console.log("You already read" + bookInfo);
    } else {
        console.log("You still need to read" + bookInfo);
    }
}
