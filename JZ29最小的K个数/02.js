function GetLeastNumbers_Solution(input, k)
{
    // 对输入的数组进行从大到小排序
    //遍历数组，取前k个数字放进最后返回的arraylist
    var result = []
    if(input.length==0 || k==0 || input.length < k){
        return [];
    }
    for(let i=0; i<input.length-1; i++){
        if(input[i] > input[i+1]){ //后一个比前一小
            let j = i;
            while(j>=0){
                if(input[j] > input[j+1]){
                    let temp = input[j+1]
                    input[j+1] = input[j]
                    input[j] = temp;
                }
                j--
            }
        }
    }
    for(let i=0; i<k; i++){
        result.push(input[i])
    }
    return result;
}
