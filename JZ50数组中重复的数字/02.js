function duplicate( numbers ) {
    numbers.sort(function(a,b){return a-b})
    for(let i=0;i<numbers.length-1;i++){
        if(numbers[i]+1 > numbers.length ){
            return -1
        }else if(numbers[i] === numbers[i+1]){
            return numbers[i]
        }
    }
    return -1
}
