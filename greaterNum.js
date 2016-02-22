
var num1 = prompt("Pick a number");
var num2 = prompt("Pick another number");
var greater = num1;

function greaterNum ( num1, num2 ){
    if (num1 > num2){
        greater = num1;
    }
    else if (num2 > num1){
         greater = num2;
    }
    else{
        console.log("You picked the same 2 numbers, stupid.");
    }
    return greater;
}

greaterNum();
