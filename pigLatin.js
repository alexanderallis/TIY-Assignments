var str = "How are you doing today?";
var res = str.split(" ");
// console.log(res);
var final = []
for(var i =0; i< res.length; i++){

    var unit = res[i].split("");
    // console.log(unit[0]);

    if(unit[0] === "a" || unit[0] === "e" || unit[0] === "i" || unit[0] === "o" || unit[0] === "u"){
        unit.push("a" + "y");
        // console.log(unit)
    }
    else{

    }

    var finalWord = [];
    finalWord.push(unit + " ");
    final.push(finalWord);
}



    console.log(final.join());
