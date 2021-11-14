//根据题目的条件，数组长度为n，且numbers数组中的所有数字都在0~n-1的范围内
//通过交换使numbers中的数字对应到数组的下标
//循环数组，当numbers[i]等于下标i，判断下一个下标是否对应；
//当numbers[i]不等于下标i
//(1)numbers[i]==numbers[numbers[i]],
//此时第i个元素的值和第i个元素的值为下标对应的值相等，那么出现重复数字；
//(2)否则swap(numbers[numbers[i]],numbers[i]);
//遍历结束都未发现重复数字，则返回-1；

//不过超时了。可能是交换那里没处理好

function duplicate( numbers ) {
    for(let i = 0; i < numbers.length;){
        if(i === numbers[i]){ ++i }
        else{
            if(numbers[i] == numbers[numbers[i]]){
                return numbers[i]
            }else{
                let tmp = numbers[i]
                numbers[i] = numbers[numbers[i]]
                numbers[numbers[i]] = tmp
            }
        }
    }
    return -1
}
console.log(duplicate([2,3,1,0,2,5,3]))