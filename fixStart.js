function fixStart(theString){
    var string = theString
    var unit = [];
    unit = string.split("");
    for(var i = 1; i<unit.length; i++){
    if(unit[0] === unit[i]){
        unit.splice(i, 1, "*")
    }
    else{}
    }
    console.log(unit.join(""));


}

fixStart("bubble");
