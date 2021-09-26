//解法一：261ms  13118k ——太烂了
function MoreThanHalfNum_Solution(numbers)
{
    if(numbers.length === 1){
        return numbers
    }
    numbers.sort(function(a,b){return a-b});
    let j = 0
    for(let i = 0; i < numbers.length-1;i++){
        console.log(numbers[i])
        if(numbers[i] === numbers[i+1]){
            j+=1
            if(j+1>numbers.length/2){
                return numbers[i]
            }
        }
    }
