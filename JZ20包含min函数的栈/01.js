//解法一：失败
//我的想法是，先创建两个栈，先往stack1添加完元素，然后比较栈顶和栈底的元素，
//若栈顶>栈底，就将栈顶元素压入stack2，否则将栈底元素压入stack2。
//直到stack1为空，这时stack2的栈顶就是最小的值。但因为时间复杂度超出要求，
//而且不太搞得懂题中接口，有些乱

var stack1 = [];
var stack2 = [];
function push(node)
{
    return stack1.push(node);
}
function pop()
{
    return stack1[stack1.length-1];
}
function top()
{
    if(stack1.length == 0){
        return stack2[stack2.length-1];
    }
    return stack1[0];
}
function min()
{
    while(stack1.length !==0){
        if(pop()>top()){
            stack2.push(stack1.pop());
            //stack1.push(top());
            console.log(stack2)
        }else{
            stack2.push(stack1.shift());
            //stack1.push(stack1.pop())
        }
//         console.log(stack2)；
    }
    return stack2[stack2.length-1];
}
