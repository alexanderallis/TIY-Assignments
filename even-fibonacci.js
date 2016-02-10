
var arr = [0,1];

for (var next= 0; next < 4e6;next++) {
    var next = arr[0] + arr[1];
    arr.push(next);
    arr.shift();
    console.log(arr);
}
