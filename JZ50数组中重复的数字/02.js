//先排序，再for循环比较前后两个数字
//注意循环从i=1开始，或者i=0开始，但循环在倒数第二元素结束

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
