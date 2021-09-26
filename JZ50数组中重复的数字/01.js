function duplicate( numbers ) {
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]+1 > numbers.length){
            return -1
        }
        for(let j = i+1;j<numbers.length;j++){
            if(numbers[i] === numbers[j]){
                return numbers[i];
            }
        }
    }
    return -1
}
