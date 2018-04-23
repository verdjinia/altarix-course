function summary(mass) {
    var sum = 0;
    mass.forEach(function(num){
        sum += num;
    })
    return sum;
}
console.log(summary([5,2,3,1,18,3]));