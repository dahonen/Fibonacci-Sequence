function fibo(input){
    // start value to keep track of our fibonacci
    var startVal = [0,1];
    // check to make sure input is >= 2 return
    if(input <= 2) return 1;
    // for loop to loop through n times at start value two
    for(var i = 2; i<=input; i++){
        //math! update start value i-1 i-2
        startVal[i]=startVal[i-1]+ startVal[i-2]
    }
    // return start value
    return startVal;
}