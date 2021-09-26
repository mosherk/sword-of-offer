//解法二：87ms   10848kb 和解法一同样的思想，稍好
function MoreThanHalfNum_Solution(numbers)
{
    
    numbers.sort(function(a,b){return a-b});
    let j = 0;
    let midnum = numbers[parseInt(numbers.length/2)];
    for(let i = 0; i < numbers.length;i++){
        if(numbers[i] === midnum){
            j+=1;
        }
    }
    if(j > numbers.length/2){
        return midnum
    }
    return 0
}
