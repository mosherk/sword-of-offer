//解法三：75ms  10060kb 
function MoreThanHalfNum_Solution(numbers)
{
    let cond = -1;
    let cnt = 0;
    for(let i=0; i<numbers.length;++i){
        if(cnt === 0){
            cond = numbers[i];
            ++cnt
        }else{
            if(cond === numbers[i]) ++cnt;
            else --cnt;
        }
    }
    cnt =0;
    for(let j=0; j<numbers.length;++j){
        if(cond == numbers[j]) ++cnt;
    }
    if(cnt > numbers.length/2){
        return cond;
    }
    return 0
}
