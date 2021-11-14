//双层暴力循环：
//第一层选一个数为锚点，这个数大于数组长度返回-1
//第二层从锚点后一个数字开始循环与锚点比较
//相等则返回值，直到最后若都没有则返回-1

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
