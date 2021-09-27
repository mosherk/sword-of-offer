//解法一：41ms  8480kb
//Push的话直接在stack1中push即可；
//Pop是删除末尾元素的，所以需要要pop的话要先将stack1的倒灌入stack2然后再删除。
//分两种情况，stack2为空则倒灌再删除，stack1不空则直接删除

//定义两个数组来作为栈
var stack1=[];
var stack2=[]
function push(node)
{
    // write code here
    //让元素只从stack1中进去，从stack2中出来
    return stack1.push(node)
}
function pop()
{
    // write code here
    //判断一下stack2是否为空
    if(stack2.length ==0){
        while(stack1.length !== 0)
            {
                stack2.push(stack1.pop())
            }
    }
    return stack2.pop()
}
module.exports = {
    push : push,
    pop : pop
};
