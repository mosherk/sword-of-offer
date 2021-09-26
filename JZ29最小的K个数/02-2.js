function GetLeastNumbers_Solution(input, k)
{
    // 对输入的数组进行从大到小排序
    //遍历数组，取前k个数字放进最后返回的arraylist
    var result = []
    if(input.length==0 || k==0 || input.length < k){
        return [];
    }
    for(let i=0; i<input.length; i++){
        for(let j=i+1; j<input.length-1; j++){
            if(input[i] > input[j]){
                let temp = input[j]
                input[j] = input[i]
                input[i] = temp;
            }
        }
    }
    for(let i=0; i<k; i++){
        result.push(input[i])
    }
    return result;
}
