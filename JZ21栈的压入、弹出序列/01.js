//新建一个栈，将数组A压入栈中，while循环当栈顶元素等于数组B时，就将其出栈，
//当循环结束时，判断栈是否为空，若为空则返回true.
//59ms 8152KB
function IsPopOrder(pushV, popV)
{
    let stack=[];
    let j = 0;
    for(let i=0;i<pushV.length;i++){
        stack.push(pushV[i])
        while(stack.length!=0 && popV[j]===stack[stack.length-1]){
            stack.pop()
            j++
        }
    }
    return stack.length!=0 ? false : true;
}
module.exports = {
    IsPopOrder : IsPopOrder
};
