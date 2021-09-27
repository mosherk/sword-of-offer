//解法一：暴力算法 49ms 8252kb
function jumpFloorII(number)
{
    if(number == 0 || number ==1)return 1
    let f = new Array(number);
    f[0] = f[1] = 1;
    for(let i=2; i<=number; ++i){
        f[i] = 0;
        for(let j=0; j<i; ++j){
            console.log(f[i]);
            f[i] += f[j]
        }
    }
    return f[number];
}
