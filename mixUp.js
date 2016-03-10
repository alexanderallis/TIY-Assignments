var one = "hello";
var two = "there";
function mixUp(one, two) {
    var oneSplit = one.split("");
    var twoSplit = two.split("");
    // var oneSplitInt = oneSplit[0,1];
    // oneSplit[0] = twoSplit[0];
    var oneSplitNew = oneSplit.splice(0,2, twoSplit[0], twoSplit[1]);
    console.log(oneSplitNew);
    // twoSplit[0] = oneSplitInt;

    // console.log(oneSplitInt);
    // console.log(oneSplit);
    // console.log(twoSplit);
}
mixUp(one, two);
