//解法二：正确。但没通过
let normal=[];
let minval=[];
function push(node)
{
    normal.push(node);
    if(minval.length === 0){
        minval.push(node)
    }else{
        if(node <= minval[0]){
            minval.push(node)
        }else{
            minval.push(minval[0])
        }
    }
}
function pop()
{
    normal.pop();
    minval.pop();
}
function top()
{
    return normal[0];
}
function min()
{
    return minval[0];
}
