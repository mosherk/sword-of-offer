//解法一：39ms   8416KB
function GetLeastNumbers_Solution(input, k)
{
    //判断k为0和k超过数组长度的情况返回[]
    //然后用几个函数
    if(k==0||k>input.length) return [];
    input.sort(function(a,b){
        return a-b;
    }).splice(k);
    return input
}




